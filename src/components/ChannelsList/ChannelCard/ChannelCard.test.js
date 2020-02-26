import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ChannelCard from './ChannelCard';

describe('<ChannelCard />', () => {
	afterAll(cleanup);

	test('Should match props', () => {
		const props = {
			image: 'https://balbla.com',
			description: 'Some description..'
		};

		const { description, image } = props;

		const { getByText, getByAltText, container } = render(
			<ChannelCard {...props} />
		);

		const cardImage = getByAltText('Channel Logo');
		const descriptionText = getByText(description);

		expect(descriptionText).toBeTruthy();
		expect(cardImage.src).toContain(image);

		expect(container.firstChild).toMatchSnapshot();
	});
});
