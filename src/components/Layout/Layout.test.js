import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

import { LoadingContext } from '../../contexts/LoadingContext';
import { ErrorContext } from '../../contexts/ErrorContext';

const createRenderTree = (isLoading, isError) => (
	<LoadingContext.Provider value={{ isLoading }}>
		<ErrorContext.Provider value={{ isError }}>
			<BrowserRouter>
				<Layout>
					<h1>We are your children!</h1>
					<h1>We are your children!</h1>
				</Layout>
			</BrowserRouter>
		</ErrorContext.Provider>
	</LoadingContext.Provider>
);

describe('<Layout />', () => {
	afterEach(cleanup);

	// To disable all console.errors for ( window.scrollTo ) function internal error.
	console.error = jest.fn();

	const childrenText = 'We are your children!';

	test('Should render children with navbar & footer and not show loading nor error', () => {
		const tree = createRenderTree(false, false);
		const { getByTestId, getAllByText, queryByTestId } = render(tree);

		const layoutContainer = getByTestId('Layout');
		const allPassedChildren = getAllByText(childrenText);

		// All children including Navbar & Footer.
		expect(layoutContainer.children.length).toEqual(3);
		// The children passed between the Layout tags
		expect(allPassedChildren.length).toEqual(2);

		expect(queryByTestId('Loader')).toBeNull();
		expect(queryByTestId('ErrorCard')).toBeNull();
	});

	test('Should render loading with navbar & footer and not show children nor error', () => {
		const tree = createRenderTree(true, false);

		const { getByTestId, queryAllByText, queryByTestId } = render(tree);

		const Loader = getByTestId('Loader');

		expect(Loader).toBeVisible();
		// Check if it's an empty array
		expect(queryAllByText(childrenText).length).toEqual(0);
		expect(queryByTestId('ErrorCard')).toBeNull();
	});

	test('Should render error with navbar & footer and not show children nor loading', () => {
		const tree = createRenderTree(false, true);

		const { getByTestId, queryAllByText, queryByTestId } = render(tree);

		const Error = getByTestId('ErrorCard');

		expect(Error).toBeVisible();
		expect(queryAllByText(childrenText).length).toEqual(0);
		expect(queryByTestId('Loader')).toBeNull();
	});
});
