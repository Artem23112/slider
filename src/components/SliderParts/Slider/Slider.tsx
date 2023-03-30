import { useEffect, useRef, useState } from 'react';
import { slidesType, slideType } from '../../../App';
import styles from './Slider.module.scss';
import SliderButton from '../SliderButton/SliderButton';
import SliderItem from '../SliderItem/SliderItem';

interface SliderProps {
	slides: slidesType
	maxItemSize: number
};

const Slider = (props: SliderProps) => {	
	const [width, setWidth] = useState(props.maxItemSize);
	const [currentPosition, setCurrentPosition] = useState(0);
	const animationDuration = 300;
	const sliderRef = useRef<HTMLDivElement>(null);
	const currentSlide = currentPosition / -width;
	
	useEffect(() => {
		const resizeHandler = () => {
			const _width = sliderRef?.current?.offsetWidth;

			if (_width) {
				console.log('edited width:', _width, 'stabile width: ', props.maxItemSize);
				setWidth(Math.min(_width, props.maxItemSize));
				setCurrentPosition(0);
			}
		}

		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		}
	}, [])

	function handlerLeftClick() {
		setCurrentPosition((prevPosition) => {
			const newPosition = prevPosition + width;
			return Math.min(newPosition, 0);
		})

	}
	function handlerRightClick() {
		setCurrentPosition((prevPosition) => {
			const newPosition = prevPosition - width;
			return Math.max(newPosition, (props.slides.length - 1) * -width);
		})

	}

	return ( 
		<div
		className={styles['slider']}
		ref={sliderRef}
		style={{maxWidth: props.maxItemSize}}
		>
			<span className={styles['slider-show-current']}>
				{currentSlide + 1}/{props.slides.length}
			</span>
			<div
				className={styles['slider-carousel']}
				style={{
					left: `${currentPosition}px`,
					transitionDuration: `${animationDuration}ms`
				}}
			>
				{
					
					props.slides.map((s: slideType) => (
						<SliderItem
							slide={s}
							key={s.id}
							maxPxItemSize={width}
						/>
					))
				}
			</div>
			<SliderButton
				direction={'left'}
				onClick={handlerLeftClick}
			/>
			<SliderButton
				direction={'right'}
				onClick={handlerRightClick}

			/>
		</div>
	)
};

export default Slider;