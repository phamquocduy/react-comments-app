import React from "react";
import { useNavigate } from "react-router-dom";

import { useUsers } from "../../users";
import { usePosts } from "../hooks";

import * as Styled from "./Posts.styles";

const TEST_POST_DATA = {
  category: "Article",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore.",
  date: "Mar 10, 2020",
  postImageUrl:
    "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  readingTime: "5 min",
  authorImageUrl:
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
};

export const Posts = () => {
  const navigate = useNavigate();
  const { data: posts } = usePosts();
  const { data: users } = useUsers();

  if (!posts || !users) {
    return "Error...";
  }

  // get 10 random posts
  const postsWithAuthors = posts
    .sort(() => Math.random() - Math.random())
    .slice(0, 10)
    .map((item) => {
      return {
        ...item,
        author: { ...users.find((user) => user.id === item.userId) },
      };
    });

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <h2>Posts</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
      </Styled.TitleWrapper>

      <Styled.PostList>
        {postsWithAuthors.map((item) => (
          <Styled.PostTile key={item.title}>
            <Styled.PostImgWrapper>
              <img src={TEST_POST_DATA.postImageUrl} alt="" />
            </Styled.PostImgWrapper>

            <Styled.PostBody>
              <div onClick={() => navigate(`/posts/${item.id}`)}>
                <Styled.PostCategoryP>
                  <a href="">{TEST_POST_DATA.category}</a>
                </Styled.PostCategoryP>
                <Styled.PostContentWrapper>
                  <Styled.PostTitle>{item.title}</Styled.PostTitle>
                  <Styled.PostDescription>{TEST_POST_DATA.description}</Styled.PostDescription>
                </Styled.PostContentWrapper>
              </div>

              <Styled.PostAuthorWrapper>
                <Styled.PostAuthorImgWrapper>
                  <img src={TEST_POST_DATA.authorImageUrl} alt="" />
                </Styled.PostAuthorImgWrapper>

                <Styled.PostAuthorDescWrapper>
                  <p>
                    <a href={`/users/${item.author.id}`}>{item.author.name}</a>
                  </p>

                  <div>
                    <time>{TEST_POST_DATA.date}</time>
                    <span>&#183;</span>
                    <span>{TEST_POST_DATA.readingTime} read</span>
                  </div>
                </Styled.PostAuthorDescWrapper>
              </Styled.PostAuthorWrapper>
            </Styled.PostBody>
          </Styled.PostTile>
        ))}
      </Styled.PostList>
    </Styled.Wrapper>
  );
};
