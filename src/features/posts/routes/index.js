import { Routes, Route } from "react-router-dom";

import { Posts, PostDetail } from "../components";

export const PostRoutes = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path=":id" element={<PostDetail />} />
    </Routes>
  );
};
