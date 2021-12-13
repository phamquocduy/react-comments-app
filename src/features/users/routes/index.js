import { Routes, Route } from "react-router-dom";

import { Users, UserDetail } from "../components";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<Users />} />
      <Route path=":id" element={<UserDetail />} />
    </Routes>
  );
};
