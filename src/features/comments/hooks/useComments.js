import { useQuery } from "react-query";

import { getCommentsByPostId } from "../api";

export const useComments = (postId) => {
  return useQuery({
    queryKey: ["getCommentsByPostId", postId],
    queryFn: () => getCommentsByPostId(postId),
    onError: () => {
      console.log("Error while loading API getCommentsByPostId");
    },
    enabled: postId != null,
  });
};
