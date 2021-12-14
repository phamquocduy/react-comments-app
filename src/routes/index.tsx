import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/layout";
import { AppRoute } from "../components/types";

import { HomePage, NoMatchPage } from "../features/public-page";
import { UserRoutes } from "../features/users";
import { PostRoutes } from "../features/posts";

const APP_ROUTES: AppRoute[] = [
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
];

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout appRoutes={APP_ROUTES} />}>
          <Route index element={<HomePage />} />

          <Route path="users//*" element={<UserRoutes />} />
          <Route path="posts//*" element={<PostRoutes />} />

          {/* this route acts like a catch-all for URLs that we don't have explicit routes for */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
};
