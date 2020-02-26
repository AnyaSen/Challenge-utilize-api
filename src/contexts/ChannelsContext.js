import React, { useState, useEffect, createContext, useContext } from 'react';

import { LoadingContext } from './LoadingContext';
import { ErrorContext } from './ErrorContext';

import { fetchData } from '../services/fetch';

export const ChannelsContext = createContext();

export const ChannelsProvider = ({ children }) => {
	const { setIsLoading } = useContext(LoadingContext);
	const { setIsError } = useContext(ErrorContext);

	const [channels, setCannels] = useState([]);

	const channels_URL = 'https://rest-api.elisaviihde.fi/rest/epg/channels';

	const setInitialChannelsData = async () => {
		try {
			const channelsData = await fetchData(channels_URL);

			const channels = channelsData.channels;

			setCannels([...channels]);

			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setInitialChannelsData();
	}, []);

	return (
		<ChannelsContext.Provider
			value={{
				channels,
				setCannels
			}}>
			{children}
		</ChannelsContext.Provider>
	);
};
