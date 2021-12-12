import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ChatAlt } from "@styled-icons/heroicons-solid";

import { usePost } from "../hooks";
import { useComments } from "../../comments";

import * as Styled from "./PostDetail.styles";

const TEST_POST_DATA = {
  date: "2h ago",
  postImageUrl:
    "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  authorImageUrl:
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
};

export const PostDetail = () => {
  const { id: postId } = useParams();
  const { data: currPost } = usePost(postId);
  const { data: comments } = useComments(postId);

  if (!currPost || !comments) {
    return "Error...";
  }

  return (
    <Styled.Wrapper>
      <Styled.PostCoverWrapper>
        <img src={TEST_POST_DATA.postImageUrl} alt="" className="w-full h-96 object-center object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </Styled.PostCoverWrapper>

      {/* TODO extract to brick component */}
      <Styled.TitleWrapper style={{ top: "-72px", position: "relative" }}>
        <h2>Post Detail</h2>
        <p>{currPost.title}</p>
      </Styled.TitleWrapper>

      {/* TODO typography styles ?? */}
      <Styled.ContentWrapper>
        <p>{currPost.body}</p>
        <p>{currPost.body}</p>
        <p>{currPost.body}</p>
      </Styled.ContentWrapper>

      <Styled.CommentsWrapper>
        {comments.map((comment, index) => (
          <li key={comment.id}>
            <Styled.BlockWrapper>
              {index !== comments.length - 1 ? <Styled.ConnectionLine /> : null}

              <Styled.CommentContentWrapper>
                <>
                  <Styled.AvatarSection>
                    <img src={TEST_POST_DATA.authorImageUrl} alt="" />

                    <span>
                      <ChatAlt style={{ color: "var(--gray-1)" }} size={20} />
                    </span>
                  </Styled.AvatarSection>

                  <div>
                    <Styled.PostAuthorDescWrapper>
                      <p>
                        <a>{comment.email}</a>
                      </p>
                      <p>Commented {TEST_POST_DATA.date}</p>
                    </Styled.PostAuthorDescWrapper>

                    <Styled.PostAuthorCommentWrapper>
                      <p>{comment.name}</p>
                      <p>{comment.body}</p>
                    </Styled.PostAuthorCommentWrapper>
                  </div>
                </>
              </Styled.CommentContentWrapper>
            </Styled.BlockWrapper>
          </li>
        ))}
      </Styled.CommentsWrapper>
    </Styled.Wrapper>
  );
};
