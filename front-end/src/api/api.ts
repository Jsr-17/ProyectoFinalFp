import axios from "axios";

export const api = axios.create({
  baseURL: "https://2daw02.iesalonsocano.org/backend/",
});
