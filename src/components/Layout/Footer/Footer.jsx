import React from 'react';
import Styles from './Footer.module.scss';

export default function Footer() {
	const elisa_URL =
		'https://elisaviihde.fi/?gclid=Cj0KCQiAqNPyBRCjARIsAKA-WFyO4k12l8p_mSQPhrWQsYoLfnhinV37G3wXUp9CWcKCXiFQYW8s4vUaAv_EEALw_wcB';

	const portfolio_URL = 'https://portfolio-anna-senchikhina.netlify.com/';

	return (
		<div className={Styles.FooterContainer}>
			<p>
				Created by:{' '}
				<a href={portfolio_URL} target='_blank' rel='noopener noreferrer'>
					Anna Senchikhina
				</a>
			</p>

			<p>
				Assignment by:{' '}
				<a href={elisa_URL} target='_blank' rel='noopener noreferrer'>
					Elisa Viihde
				</a>
			</p>
		</div>
	);
}
