import React, { useContext } from 'react';
import Styles from './ChannelsList.module.scss';

import { ChannelsContext } from '../../contexts/ChannelsContext';

import ChannelCard from './ChannelCard/ChannelCard';

export default function ChannelsList() {
	const { channels } = useContext(ChannelsContext);

	return (
		<div className={Styles.ChannelsListContainer}>
			{channels.map((channel, index) => {
				const { description } = channel;

				return (
					<ChannelCard
						image={channel.logos[4].url}
						description={
							description
								? description
								: 'Sorry, no description for this channel'
						}
						key={index}
					/>
				);
			})}
		</div>
	);
}
