import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
	const [isError, setIsError] = useState(false);

	return (
		<ErrorContext.Provider
			value={{
				isError,
				setIsError
			}}>
			{children}
		</ErrorContext.Provider>
	);
};
