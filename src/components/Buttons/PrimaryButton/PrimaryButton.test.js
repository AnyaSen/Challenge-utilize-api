import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PrimaryButton from './PrimaryButton';

describe('<PrimaryButton />', () => {
	afterEach(cleanup);

	test('Should have correct text.', () => {
		const text = 'Live Programs';

		const { getByText, container } = render(<PrimaryButton text={text} />);

		const button = getByText(text);

		expect(button).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
