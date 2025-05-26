import { api } from "../api";

export const userService = () => {
  type log = {
    pass: string;
    email: string;
  };

  type register = {
    email: string;
    pass: string;
    name: string;
  };

  const login = async (data: log) => api.post("/users", data);

  const register = async (data: register) => api.post("/users/register", data);

  return {
    login,
    register,
  };
};
