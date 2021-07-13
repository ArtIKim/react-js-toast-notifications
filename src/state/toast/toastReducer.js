export const ToastReducer = (state, action) => {
	switch (action.type) {
		case "ADD_NOTIFICATION":
			return {
				...state,
				notifications: [...state.notifications, action.payload],
			};
		case "DELETE_NOTIFICATION":
			return {
				...state,
				notifications: state.notifications.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};
