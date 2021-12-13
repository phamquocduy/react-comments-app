import { axios } from "../../../lib/axios";

export const getCommentsByPostId = async (postId) => {
  return await axios.get(`posts/${postId}/comments`);
};
