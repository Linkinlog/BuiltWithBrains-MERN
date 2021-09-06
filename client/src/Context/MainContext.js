import React, { useReducer, createContext } from 'react';

export const MainContext = createContext();

const initialState = {
	loading: false
};

const reducer = (state, action) => {
	switch (action.type) {
		default:
			throw new Error();
	}
};

export const MainContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <MainContext.Provider
	value={[state, dispatch]}
	>
		{props.children}
		</MainContext.Provider>;
};
