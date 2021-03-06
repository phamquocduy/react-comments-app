import React from "react";
import { useNavigate } from "react-router-dom";
import { UseQueryResult } from "react-query";

import { useUsers, User } from "../../users";
import { usePosts } from "../hooks";
import { Post } from "../types";

import * as Styled from "./Posts.styles";
import { ContentWrapperStyle, TitleWrapperStyle } from "../../../global-styles";
import { USER_IMG, POST_IMG } from "../../../constants/test-data";

export const Posts = () => {
  const navigate = useNavigate();
  const { data: posts }: UseQueryResult<Post[], Error> = usePosts();
  const { data: users }: UseQueryResult<User[], Error> = useUsers();

  if (!posts || !users) {
    return <div>Loading...</div>;
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
    <ContentWrapperStyle>
      <TitleWrapperStyle>
        <h2>Random 10 Posts</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
      </TitleWrapperStyle>

      <Styled.PostList>
        {postsWithAuthors.map((item) => (
          <Styled.PostTile key={item.title}>
            <Styled.PostImgWrapper>
              <img src={POST_IMG} alt="" />
            </Styled.PostImgWrapper>

            <Styled.PostBody>
              <div onClick={() => navigate(`/posts/${item.id}`)}>
                <Styled.PostCategoryP>
                  <a href="">Article</a>
                </Styled.PostCategoryP>
                <Styled.PostContentWrapper>
                  <Styled.PostTitle>{item.title}</Styled.PostTitle>
                  <Styled.PostDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat
                    doloribus, eveniet dolore.
                  </Styled.PostDescription>
                </Styled.PostContentWrapper>
              </div>

              <Styled.PostAuthorWrapper>
                <Styled.PostAuthorImgWrapper>
                  <img src={USER_IMG} alt="" />
                </Styled.PostAuthorImgWrapper>

                <Styled.PostAuthorDescWrapper>
                  <p>
                    <a href={`/users/${item.author.id}`}>{item.author.name}</a>
                  </p>

                  <div>
                    <time>Dec 13, 2021</time>
                    <span>&#183;</span>
                    <span>5 min read</span>
                  </div>
                </Styled.PostAuthorDescWrapper>
              </Styled.PostAuthorWrapper>
            </Styled.PostBody>
          </Styled.PostTile>
        ))}
      </Styled.PostList>
    </ContentWrapperStyle>
  );
};
