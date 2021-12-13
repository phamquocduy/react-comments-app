import { axios } from "../../../lib/axios";

export const getUsers = async () => {
  return await axios.get("users");
};

export const getUserById = async (userId) => {
  return await axios.get(`users/${userId}`);
};
