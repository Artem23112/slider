import React from 'react';
import styles from './SliderButton.module.scss';
import left from '../../../assets/slider/left.png';
import right from '../../../assets/slider/right.png';

const images = { left, right };

interface SliderButtonsProps {
	direction: 'left' | 'right'
	onClick: () => void
	// currentSlide: number
	// amountSlides: number
	// currentPosition: number
	// setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
	// setCurrentPosition: React.Dispatch<React.SetStateAction<number>>
};

const SliderButton = (props: SliderButtonsProps) => {


	return (
		<button
			className={[styles['bth'], styles[props.direction]].join(' ')}
			onClick={() => { props.onClick() }}
		>
			<img className={styles[`bth-${props.direction}-img`]} src={images[props.direction]} alt={props.direction} />
		</button>
	)

};

export default SliderButton;