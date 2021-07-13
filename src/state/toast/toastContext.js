import React, { createContext, useReducer } from "react";
import { ToastReducer } from "./toastReducer";

const initialState = {
	notifications: [
		// {
		// 	id: uuidv4(),
		// 	type: "SUCCESS",
		// 	title: "Success title",
		// 	message: "Success message",
		// },
		// {
		// 	id: uuidv4(),
		// 	type: "INFO",
		// 	title: "Info title",
		// 	message: "Info message",
		// },
		// {
		// 	id: uuidv4(),
		// 	type: "WARNING",
		// 	title: "Warning title",
		// 	message: "Warning message",
		// },
		// {
		// 	id: uuidv4(),
		// 	type: "ERROR",
		// 	title: "Error title",
		// 	message: "Error message",
		// },
	],
};

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ToastReducer, initialState);

	const addNotification = (payload) => {
		dispatch({
			type: "ADD_NOTIFICATION",
			payload: payload,
		});
	};

	const deleteNotification = (id) => {
		dispatch({
			type: "DELETE_NOTIFICATION",
			payload: id,
		});
	};

	return (
		<ToastContext.Provider
			value={{
				...state,
				addNotification,
				deleteNotification,
			}}>
			{children}
		</ToastContext.Provider>
	);
};

export { ToastContext, ToastProvider };
