import axios from "axios";

export default axios.create({
  baseURL: "https://8783-2607-fea8-3522-2100-c18d-9d1d-6ed7-cdac.ngrok-free.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
