import React, { useContext, useState } from 'react';
import Styles from './ProgramsList.module.scss';

import { ProgramsContext } from '../../contexts/ProgramsContext';

import ProgramCard from './ProgramCard/ProgramCard';
import arrowDown from '../../assets/img/arrow-down.svg';

export default function ProgramsList() {
	const { schedule, timezone } = useContext(ProgramsContext);
	const [limiter, setLimiter] = useState(8);

	return (
		<div className={Styles.ProgramsListContainer}>
			<p className={Styles.timezone}>Timezone: {timezone}</p>

			{schedule.map((program, index) => {
				const {
					name,
					startTime,
					endTime,
					shortDescription
				} = program.programs[0];

				const { recordable } = program.channel;

				if (index < limiter) {
					return (
						<ProgramCard
							name={name}
							description={shortDescription}
							channel={program.channel.name}
							starts={startTime}
							ends={endTime}
							recordable={recordable}
							key={index}
						/>
					);
				}
				return;
			})}

			<div className={Styles.showMoreContainer}>
				<div
					onClick={() => {
						setLimiter(limiter + 8);
					}}
					className={Styles.showMore}>
					<p>Show more programs</p>

					<img src={arrowDown} alt='Arrow Down' />
				</div>
			</div>
		</div>
	);
}
