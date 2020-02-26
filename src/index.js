import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { ChannelsProvider } from './contexts/ChannelsContext';
import { ProgramsProvider } from './contexts/ProgramsContext';
import { LoadingContextProvider } from './contexts/LoadingContext';
import { ErrorContextProvider } from './contexts/ErrorContext';

ReactDOM.render(
	<BrowserRouter>
		<LoadingContextProvider>
			<ErrorContextProvider>
				<ProgramsProvider>
					<ChannelsProvider>
						<App />
					</ChannelsProvider>
				</ProgramsProvider>
			</ErrorContextProvider>
		</LoadingContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
