import { useQuery, UseQueryResult } from "react-query";

import { getPosts } from "../api";
import { Post } from "../types";

export const usePosts = (): UseQueryResult<Post[], Error> => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    onError: () => {
      // console.log("Error while loading API getPosts");
    },
  });
};
