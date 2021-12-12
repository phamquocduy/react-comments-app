import { useQuery } from "react-query";

import { getPostById } from "../api";

export const usePost = (postId) => {
  return useQuery({
    queryKey: ["getPostById", postId],
    queryFn: () => getPostById(postId),
    onError: () => {
      console.log("Error while loading API getPostById");
    },
    enabled: postId != null,
  });
};
