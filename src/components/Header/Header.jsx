import React from 'react';
import Styles from './Header.module.scss';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';

export default function Header() {
	return (
		<div className={Styles.HeaderContainer}>
			<h1>Welcome to Elisa Viihde!</h1>

			<h3>In this app you can see a list of live TV programs and channels.</h3>

			<div className={Styles.buttonsContainer}>
				<Link
					to='programs'
					spy={true}
					smooth={true}
					hashSpy={true}
					offset={-114}
					duration={500}>
					<PrimaryButton text='Live Programs' />
				</Link>

				<RouterLink to='/channels'>
					<SecondaryButton text='All Channels' />
				</RouterLink>
			</div>
		</div>
	);
}
