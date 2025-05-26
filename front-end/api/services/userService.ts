import { api } from "../api";

export const userService = () => {
  type log = {
    pass: string;
    email: string;
  };

  type registerUser = {
    email: string;
    pass: string;
    name: string;
    preferences: string[];
  };

  const login = async (data: log) => api.post("/users", data);

  const registerUser = async (data: registerUser) =>
    api.post("/users/register", data);

  return {
    login,
    registerUser,
  };
};
