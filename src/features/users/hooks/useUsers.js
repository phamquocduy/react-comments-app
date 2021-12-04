import { useQuery } from "react-query";

import { getUsers } from "../api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
    onError: () => {
      console.log("Error while loading API getUsers");
    },
  });
};
