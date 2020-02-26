import React, { useState, useEffect, createContext, useContext } from 'react';

import { ErrorContext } from './ErrorContext';
import { LoadingContext } from './LoadingContext';

import { fetchData } from '../services/fetch';

export const ProgramsContext = createContext();

export const ProgramsProvider = ({ children }) => {
	const { setIsLoading } = useContext(LoadingContext);
	const { setIsError } = useContext(ErrorContext);

	const [schedule, setSchedule] = useState([]);
	const [timezone, setTimezone] = useState([]);

	const programs_URL = 'https://rest-api.elisaviihde.fi/rest/epg/schedule/live';

	const setInitialProgramsData = async () => {
		try {
			const programsData = await fetchData(programs_URL);

			const schedule = programsData.schedule;
			const timezone = programsData.timezone;

			const filteredSchedule = schedule.filter(
				// To remove empty program arrays.
				program => program.programs.length !== 0
			);

			setSchedule([...filteredSchedule]);
			setTimezone(timezone);

			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setInitialProgramsData();
	}, []);

	return (
		<ProgramsContext.Provider
			value={{
				schedule,
				timezone,
				setSchedule
			}}>
			{children}
		</ProgramsContext.Provider>
	);
};
