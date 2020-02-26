import React from 'react';
import Styles from './PrimaryButton.module.scss';

export default function PrimaryButton({ text }) {
	return <button className={Styles.PrimaryButton}>{text}</button>;
}
