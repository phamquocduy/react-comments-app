import { useQuery, UseQueryResult } from "react-query";

import { getUsers } from "../api";
import { User } from "../types";

export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
    onError: () => {
      // console.log("Error while loading API getUsers");
    },
  });
};
