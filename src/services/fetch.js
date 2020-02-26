import axios from 'axios';

// const URL = 'https://rest-api.elisaviihde.fi/rest/epg/channels';
// const URL = 'https://rest-api.elisaviihde.fi/rest/epg/schedule/live';

export const fetchData = async URL => {
	try {
		const result = await axios(URL);

		return result.data;
	} catch (error) {
		throw Error(error);
	}
};
