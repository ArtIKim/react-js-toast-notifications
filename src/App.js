import { useContext } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContext } from "./state/toast/toastContext";
import { Toast } from "./components/Toast";

function App() {
	const { addNotification } = useContext(ToastContext);

	const handleButtonSelect = (type) => {
		switch (type) {
			case "SUCCESS":
				return addNotification({
					id: uuidv4(),
					type,
					title: "Success title",
					message: "Success message",
				});
			case "INFO":
				return addNotification({
					id: uuidv4(),
					type,
					title: "Info title",
					message: "Info message",
				});
			case "WARNING":
				return addNotification({
					id: uuidv4(),
					type,
					title: "Warning title",
					message: "Warning message",
				});
			case "ERROR":
				return addNotification({
					id: uuidv4(),
					type,
					title: "Error title",
					message: "Error message",
				});
			default:
				return;
		}
	};

	return (
		<>
			<div className="main-content">
				<button onClick={() => handleButtonSelect("SUCCESS")}>SUCCESS</button>
				<button onClick={() => handleButtonSelect("INFO")}>INFO</button>
				<button onClick={() => handleButtonSelect("WARNING")}>WARNING</button>
				<button onClick={() => handleButtonSelect("ERROR")}>ERROR</button>
			</div>
			<div>
				<Toast position="bottom-left" autoDeleteInterval={4000} />
			</div>
		</>
	);
}

export default App;
