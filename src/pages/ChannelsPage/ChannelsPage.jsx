import React from 'react';

import Layout from '../../components/Layout/Layout';
import ChannelsList from '../../components/ChannelsList/ChannelsList';
import Heading from '../../components/Heading/Heading';

export default function ChannelsPage() {
	return (
		<Layout>
			<Heading text='All Channels' />
			<ChannelsList />
		</Layout>
	);
}
