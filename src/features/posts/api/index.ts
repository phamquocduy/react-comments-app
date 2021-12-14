import { axios } from "../../../lib/axios";

export const getPosts = async () => {
  return await axios.get("posts");
};

export const getPostById = async (postId: string) => {
  return await axios.get(`posts/${postId}`);
};
