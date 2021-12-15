import { User } from "../../users";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: User;
};
