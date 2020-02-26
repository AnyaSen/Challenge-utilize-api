import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProgramCard from './ProgramCard';

describe('<ProgramCard />', () => {
	afterEach(cleanup);

	const props = {
		name: 'NHL On The Fly',
		channel: 'Viasat Jääkiekko HD',
		starts: '26.02.2020 19:00',
		ends: '26.02.2020 20:00',
		description:
			'Huippuhetket NHL-kierroksen otteluista, haastattelut ja analyysit sekä tärkeimmät uutiset.',
		recordable: false
	};

	const { name, channel, starts, ends, description } = props;

	test('Should match passed props and not show more', () => {
		const { getByText, getByTestId, queryByTestId } = render(
			<ProgramCard {...props} />
		);

		const programName = getByText(name);
		const programChannel = getByText(`Channel: ${channel}`);
		const programStartTime = getByText(`Starts: ${starts}`);
		const programEndTime = getByText(`Ends: ${ends}`);
		const showMoreButton = getByTestId('showMore');

		expect(programName).toBeTruthy();
		expect(programChannel).toBeTruthy();
		expect(programStartTime).toBeTruthy();
		expect(programEndTime).toBeTruthy();
		expect(queryByTestId('showMoreContainer')).toBeNull();
		expect(showMoreButton).toBeTruthy();
	});

	test('Should show more on click', () => {
		const { getByTestId, queryByTestId } = render(<ProgramCard {...props} />);

		const showMoreButton = getByTestId('showMore');

		showMoreButton.click();

		expect(queryByTestId('showMoreContainer')).toBeVisible();

		const programDescription = getByTestId('Description');
		const isRecordable = getByTestId('Recordable');

		expect(programDescription.textContent).toBe(`Description: ${description}`);
		expect(isRecordable.textContent).toBe('Recordable: No');
	});
});
