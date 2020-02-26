import React from 'react';
import Styles from './ErrorCard.module.scss';

import errorIcon from '../../assets/img/error.svg';

export default function ErrorCard() {
	return (
		<div data-testid='ErrorCard' className={Styles.ErrorCardContainer}>
			<img src={errorIcon} alt='Error' />

			<p data-testid='errorMessage'>Sorry, something went wrong. :(</p>
		</div>
	);
}
