import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ErrorCard from './ErrorCard';

describe('<ErrorCard />', () => {
	afterAll(cleanup);

	test('Should contain the correct image & text', () => {
		const { getByTestId, getByAltText, container } = render(<ErrorCard />);

		const errorMessage = 'Sorry, something went wrong. :(';

		const errorIcon = getByAltText('Error');
		const errortext = getByTestId('errorMessage');

		expect(errorIcon.src).toContain('error.svg');
		expect(errortext.textContent).toBe(errorMessage);

		expect(container.firstChild).toMatchSnapshot();
	});
});
