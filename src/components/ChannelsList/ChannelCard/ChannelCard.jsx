import React from 'react';
import Styles from './ChannelCard.module.scss';

export default function ChannelCard({ image, description }) {
	return (
		<div data-testid='ChannelCard' className={Styles.ChannelCardContainer}>
			<img
				data-testid='ChannelImage'
				className={Styles.image}
				src={image}
				alt='Channel Logo'
			/>

			<p data-testid='ChannelDescription' className={Styles.description}>
				{description}
			</p>
		</div>
	);
}
