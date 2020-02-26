import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Heading from './Heading';

describe('<Heading />', () => {
	afterEach(cleanup);

	test('Should have correct text.', () => {
		const text = 'Button text';

		const { getByText, container } = render(<Heading text={text} />);

		const heading = getByText(text);

		expect(heading).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
