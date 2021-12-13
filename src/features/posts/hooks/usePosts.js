import { useQuery } from "react-query";

import { getPosts } from "../api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    onError: () => {
      console.log("Error while loading API getPosts");
    },
  });
};
