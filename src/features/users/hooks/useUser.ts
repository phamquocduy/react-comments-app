import { useQuery, UseQueryResult } from "react-query";

import { getUserById } from "../api";
import { User } from "../types";

export const useUser = (userId: string): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ["getUserById", userId],
    queryFn: () => getUserById(userId),
    onError: () => {
      // console.log("Error while loading API getUserById");
    },
    enabled: userId != null,
  });
};
