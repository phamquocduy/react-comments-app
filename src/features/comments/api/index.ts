import { axios } from "../../../lib/axios";

export const getCommentsByPostId = async (postId: string) => {
  return await axios.get(`posts/${postId}/comments`);
};
