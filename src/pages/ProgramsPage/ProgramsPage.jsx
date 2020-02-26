import React from 'react';

import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import ProgramsList from '../../components/ProgramsList/ProgramsList';
import Heading from '../../components/Heading/Heading';

export default function ProgramsPage() {
	return (
		<Layout>
			<Header />
			<Heading text='LIVE Programs' />
			<ProgramsList />
		</Layout>
	);
}
