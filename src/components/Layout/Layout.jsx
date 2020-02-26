import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './Layout.module.scss';

import { LoadingContext } from '../../contexts/LoadingContext';
import { ErrorContext } from '../../contexts/ErrorContext';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Loader from '../Loader/Loader';
import ErrorCard from '../ErrorCard/ErrorCard';

export default function Layout({ children }) {
	const { pathname } = useLocation();
	const { isLoading } = useContext(LoadingContext);
	const { isError } = useContext(ErrorContext);

	useEffect(() => {
		// For restoring the page scroll postion on changing routes.
		window.scrollTo(0, 0);
	}, [pathname]);

	const renderChildren = () => {
		if (isLoading) return <Loader />;
		if (isError) return <ErrorCard />;
		return children;
	};

	return (
		<div data-testid='Layout' className={Styles.LayoutContainer}>
			<Navbar />

			<div className={Styles.childrenContainer}>{renderChildren()}</div>

			<Footer />
		</div>
	);
}
