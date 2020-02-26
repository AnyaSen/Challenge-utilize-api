import React from 'react';
import Styles from './NavItems.module.scss';

import { NavLink } from 'react-router-dom';

export default function NavItems() {
	return (
		<ul data-testid='NavItems' className={Styles.NavItemsContainer}>
			<NavLink exact to='/' activeClassName={Styles.activeLink}>
				<li>PROGRAMS</li>
			</NavLink>

			<NavLink exact to='/channels' activeClassName={Styles.activeLink}>
				<li>CHANNELS</li>
			</NavLink>
		</ul>
	);
}
