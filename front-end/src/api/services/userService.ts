import { api } from "../api";

export const userService = () => {
  type Log = {
    pass: string;
    email: string;
  };

  type RegisterUser = {
    email: string;
    pass: string;
    name: string;
    preferences: string[];
  };

  const login = async (data: Log) => api.post("/login.php", data);

  const registerUser = async (data: RegisterUser) => {
    return api.post("/store.php", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    login,
    registerUser,
  };
};
