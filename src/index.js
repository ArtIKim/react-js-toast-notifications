import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ToastProvider } from "./state/toast/toastContext";

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
