import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import NavItems from './NavItems';

describe('<NavItems />', () => {
	afterAll(cleanup);

	const tree = (
		<BrowserRouter>
			<NavItems />
		</BrowserRouter>
	);

	const { getByTestId, container } = render(tree);

	const navItemsContainer = getByTestId('NavItems');
	const navItemsChildrenLength = navItemsContainer.children.length;

	test('Should render all children', () => {
		expect(navItemsChildrenLength).toBe(2);
	});

	test('Should match snapshot', () => {
		expect(container.firstChild).toMatchSnapshot();
	});
});
