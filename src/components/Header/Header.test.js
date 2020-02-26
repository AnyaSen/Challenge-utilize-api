import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
	afterAll(cleanup);

	const tree = (
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);

	const { getByText, container } = render(tree);

	test('Should contain the correct text', () => {
		const mainMessage = 'Welcome to Elisa Viihde!';
		const subMessage =
			'In this app you can see a list of live TV programs and channels.';
		const programsLinkMessage = 'Live Programs';
		const channelsLinkMessage = 'All Channels';

		const mainText = getByText(mainMessage);
		const subText = getByText(subMessage);
		const programsLinkText = getByText(programsLinkMessage);
		const channelsLinkText = getByText(channelsLinkMessage);

		expect(mainText).toBeTruthy();
		expect(subText).toBeTruthy();
		expect(programsLinkText).toBeTruthy();
		expect(channelsLinkText).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
