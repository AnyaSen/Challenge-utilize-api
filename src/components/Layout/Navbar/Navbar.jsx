import React from 'react';
import Styles from './Navbar.module.scss';

import { Link } from 'react-router-dom';

import LogoIcon from '../../../assets/img/logo.svg';

import NavItems from './NavItems/NavItems';

export default function Navbar() {
	return (
		<div data-testid='Navbar' className={Styles.NavbarContainer}>
			<Link to='/'>
				<img src={LogoIcon} alt='Tv Logo' />
			</Link>

			<NavItems />
		</div>
	);
}
