import { useQuery, UseQueryResult } from "react-query";

import { getPostById } from "../api";
import { Post } from "../types";

export const usePost = (postId: string): UseQueryResult<Post, Error> => {
  return useQuery({
    queryKey: ["getPostById", postId],
    queryFn: () => getPostById(postId),
    onError: () => {
      // console.log("Error while loading API getPostById");
    },
    enabled: postId != null,
  });
};
