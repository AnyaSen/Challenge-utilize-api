import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { ChannelsContext } from '../../contexts/ChannelsContext';

import channelsArray from './mock/mockChannels';
import ChannelsList from './ChannelsList';

describe('<ChannelsList />', () => {
	afterAll(cleanup);

	const tree = (
		<ChannelsContext.Provider value={{ channels: channelsArray }}>
			<ChannelsList />
		</ChannelsContext.Provider>
	);

	const { getAllByTestId } = render(tree);

	const allChannelCards = getAllByTestId('ChannelCard');
	const allChannelImages = getAllByTestId('ChannelImage');
	const allChannelDescriptions = getAllByTestId('ChannelDescription');

	test('Should render all channel cards.', () => {
		const numberOfChannels = channelsArray.length;

		expect(allChannelCards.length).toEqual(numberOfChannels);
	});

	test('Should match all images of context state', () => {
		allChannelImages.forEach((channelImage, index) => {
			const channelsArrayUrl = channelsArray[index].logos[4].url;

			expect(channelImage.src).toContain(channelsArrayUrl);
		});
	});

	test('Should match all descriptions of context state', () => {
		allChannelDescriptions.forEach((channelDesc, index) => {
			const channelsArrayDesc = channelsArray[index].description;

			if (index !== 2) {
				// Check only the first two.
				expect(channelDesc.textContent).toContain(channelsArrayDesc);
			} else {
				// Because the third element does not have a description.
				expect(channelDesc.textContent).toBe(
					'Sorry, no description for this channel'
				);
			}
		});
	});
});
