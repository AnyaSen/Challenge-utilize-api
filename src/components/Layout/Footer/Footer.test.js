import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from './Footer';

describe('<Footer />', () => {
	afterAll(cleanup);

	const portfolio_URL = 'https://portfolio-anna-senchikhina.netlify.com/';

	const elisa_URL =
		'https://elisaviihde.fi/?gclid=Cj0KCQiAqNPyBRCjARIsAKA-WFyO4k12l8p_mSQPhrWQsYoLfnhinV37G3wXUp9CWcKCXiFQYW8s4vUaAv_EEALw_wcB';

	const { getByText, container } = render(<Footer />);

	const createdBy = getByText('Created by:');
	const assignmentBy = getByText('Assignment by:');
	const portfolioLink = getByText('Anna Senchikhina');
	const assignmentProviderLink = getByText('Elisa Viihde');

	test('Should display correct text', () => {
		expect(createdBy).toBeTruthy();
		expect(assignmentBy).toBeTruthy();
	});

	test('Should have all correct links', () => {
		expect(portfolioLink.href).toContain(portfolio_URL);
		expect(assignmentProviderLink.href).toContain(elisa_URL);
	});

	test('Should match snapshot', () => {
		expect(container.firstChild).toMatchSnapshot();
	});
});
