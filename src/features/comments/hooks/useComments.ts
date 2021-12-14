import { useQuery, UseQueryResult } from "react-query";

import { getCommentsByPostId } from "../api";
import { Comment } from "../types";

export const useComments = (postId: string): UseQueryResult<Comment[], Error> => {
  return useQuery({
    queryKey: ["getCommentsByPostId", postId],
    queryFn: () => getCommentsByPostId(postId),
    onError: () => {
      // console.log("Error while loading API getCommentsByPostId");
    },
    enabled: postId != null,
  });
};
