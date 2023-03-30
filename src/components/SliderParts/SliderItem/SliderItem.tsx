import React from 'react';
import { slideType } from '../../../App';
import styles from './SliderItem.module.scss';

interface SliderItemProps {
	slide: slideType
	maxPxItemSize: number
};

const SliderItem = (props: SliderItemProps) => {
	return (
		<div
			className={styles['slider-item']}
			style={{width: props.maxPxItemSize}}
		>
			<img className={styles['slider-item__img']} src={props.slide.img} />
			<p className={styles['slider-item__text']}>{props.slide.text}</p>
		</div>
	)
};

export default SliderItem;