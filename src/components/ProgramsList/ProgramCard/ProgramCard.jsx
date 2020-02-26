import React, { useState } from 'react';
import Styles from './ProgramCard.module.scss';

export default function ProgramCard({
	name,
	channel,
	starts,
	ends,
	description,
	recordable
}) {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<div data-testid='ProgramCard' className={Styles.ProgramCardContainer}>
			<h2 className={Styles.name}>{name}</h2>

			<p className={Styles.channel}>Channel: {channel}</p>

			<p className={Styles.times}> Starts: {starts}</p>

			<p className={Styles.times}>Ends: {ends}</p>

			{showMore ? (
				<div data-testid='showMoreContainer' className={Styles.extraContainer}>
					<p data-testid='Description' className={Styles.description}>
						<span>Description:</span>{' '}
						{description && description !== name
							? description
							: `Sorry, no description for this program`}
					</p>

					<p data-testid='Recordable' className={Styles.recordable}>
						<span>Recordable:</span> {recordable ? 'Yes' : 'No'}
					</p>
				</div>
			) : null}

			<span
				data-testid='showMore'
				className={Styles.more}
				onClick={toggleShowMore}>
				{showMore ? 'Show less' : 'More info'}
			</span>
		</div>
	);
}
