import React from 'react';
import Styles from './Loader.module.scss';

import loader from '../../assets/img/play-button.svg';

export default function Loader() {
	return (
		<div data-testid='Loader' className={Styles.LoaderContainer}>
			<img src={loader} alt='loader icon' />
			<h3>Loading...</h3>
		</div>
	);
}
