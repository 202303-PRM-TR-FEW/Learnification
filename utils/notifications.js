import { toast } from "react-toastify";

/**
 * 
 * @param {string} message for the notification
 * @param {string} type of the notification (info, success, warning, error, default)
 * @returns {void}
 * @description This function is used to show notifications to the user using toastify
 */
const notify = (message, type = "info" || "success" || "warning" || "error" || "default") => toast(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    theme: "colored",
    closeButton: false,
    progressStyle: {
        background: "#fff",
    }
})
export default notify;