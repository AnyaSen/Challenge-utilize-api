import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Loader from './Loader';

describe('<Loader />', () => {
	afterAll(cleanup);

	test('Should contain the correct image & text', () => {
		const { getByText, getByAltText, container } = render(<Loader />);

		const loadingMessage = 'Loading...';

		const loadingText = getByText(loadingMessage);
		const loaderIcon = getByAltText('loader icon');

		expect(loadingText).toBeTruthy();
		expect(loaderIcon.src).toContain('play-button.svg');

		expect(container.firstChild).toMatchSnapshot();
	});
});
