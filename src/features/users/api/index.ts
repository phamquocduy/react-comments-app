import { axios } from "../../../lib/axios";

export const getUsers = async () => {
  return await axios.get("users");
};

export const getUserById = async (userId: string) => {
  return await axios.get(`users/${userId}`);
};
