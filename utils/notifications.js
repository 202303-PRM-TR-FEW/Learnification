import { toast } from "react-toastify";

const notify = (message, type = "info" || "success" || "warning" || "error" || "default") => toast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    type,
    theme: "light"
})
export default notify;