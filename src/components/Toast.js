import React, { useContext } from "react";
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaRegWindowClose } from "react-icons/fa";
import "./Toast.css";
import { ToastContext } from "../state/toast/toastContext";

export const Toast = ({ position, autoDeleteInterval }) => {
	const { notifications, deleteNotification } = useContext(ToastContext);

	const generateIcons = (type) => {
		switch (type) {
			case "SUCCESS":
				return <FaCheckCircle />;
			case "INFO":
				return <FaInfoCircle />;
			case "WARNING":
				return <FaExclamationTriangle />;
			case "ERROR":
				return <FaExclamationCircle />;
			default:
				return;
		}
	};

	const generateBackground = (type) => {
		switch (type) {
			case "SUCCESS":
				return "green";
			case "INFO":
				return "blue";
			case "WARNING":
				return "orange";
			case "ERROR":
				return "red";
			default:
				return;
		}
	};

	return (
		<div className={`notification-container ${position}`}>
			{notifications.map((notification) => {
				const { id, type, title, message } = notification;

				if (autoDeleteInterval) {
					setInterval(() => {
						deleteNotification(id);
					}, autoDeleteInterval);
				}

				return (
					<div key={id} className={`notification toast`} style={{ backgroundColor: generateBackground(type) }}>
						<FaRegWindowClose className="close-button" onClick={() => deleteNotification(id)} />
						<div className="notification-image">{generateIcons(type)}</div>
						<div className="notification-title">{title}</div>
						<div className="notification-message">{message}</div>
					</div>
				);
			})}
		</div>
	);
};
