import { useQuery } from "react-query";

import { getUserById } from "../api";

export const useUser = (userId) => {
  return useQuery({
    queryKey: ["getUserById", userId],
    queryFn: () => getUserById(userId),
    onError: () => {
      console.log("Error while loading API getUserById");
    },
    enabled: userId != null,
  });
};
