import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import Navbar from './Navbar';

describe('<Navbar />', () => {
	afterAll(cleanup);

	const tree = (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);

	const { getByTestId, getByAltText, container } = render(tree);

	const navbar = getByTestId('Navbar');
	const logo = getByAltText('Tv Logo');

	test('Should render all children', () => {
		expect(navbar.children.length).toBe(2);
	});

	test('Should render correct image', () => {
		expect(logo.src).toContain('logo.svg');
	});

	test('Should match snapshot', () => {
		expect(container.firstChild).toMatchSnapshot();
	});
});
