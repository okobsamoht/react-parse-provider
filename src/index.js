import React, {useEffect, createContext, useContext} from 'react';
import * as Parse from 'parse';

const ParseContext = createContext(null);

function ParseProvider({applicationId, javascriptKey, serverUrl, children}) {
	useEffect(() => {
		Parse.initialize(applicationId, javascriptKey);
		Parse.serverURL = serverUrl;
	}, []);

	const value = useContext(ParseContext);

	return (
		<ParseContext.Provider value={Parse}>
			{children}
		</ParseContext.Provider>
	);
}

function useParse() {
	return useContext(ParseContext);
}

export {ParseProvider, useParse};
