import React from 'react';
import Styles from './Heading.module.scss';

export default function Heading({ text }) {
	return (
		<div className={Styles.HeadingContainer} id='programs'>
			<h2>{text}</h2>
		</div>
	);
}
