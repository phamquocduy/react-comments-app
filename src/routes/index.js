import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/layout";
import { HomePage, NoMatchPage } from "../features/public-page";
import { Users } from "../features/users";
import { Posts } from "../features/posts";
import { Comments } from "../features/comments";

const APP_ROUTES = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "users",
    label: "Users",
  },
  {
    path: "posts",
    label: "Posts",
  },
  {
    path: "comments",
    label: "Comments",
  },
];

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout appRoutes={APP_ROUTES} />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />

          {/* this route acts like a catch-all for URLs that we don't have explicit routes for */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
};