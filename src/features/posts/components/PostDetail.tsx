import React from "react";
import { useParams } from "react-router-dom";
import { ChatAlt } from "@styled-icons/heroicons-solid";
import { UseQueryResult } from "react-query";

import { useComments, Comment } from "../../comments";

import { usePost } from "../hooks";
import { Post } from "../types";

import * as Styled from "./PostDetail.styles";
import { ContentWrapperStyle, TitleWrapperStyle } from "../../../global-styles";
import { USER_IMG, POST_IMG } from "../../../constants/test-data";

export const PostDetail: React.FC<{}> = () => {
  const { id: postId } = useParams<{ id: string }>();
  const { data: currPost }: UseQueryResult<Post, Error> = usePost(postId!);
  const { data: comments }: UseQueryResult<Comment[], Error> = useComments(postId!);

  if (!currPost || !comments) {
    return <div>Loading...</div>;
  }

  return (
    <ContentWrapperStyle>
      <Styled.PostCoverWrapper>
        <img src={POST_IMG} alt="" />
      </Styled.PostCoverWrapper>

      <TitleWrapperStyle style={{ top: "-72px", position: "relative" }}>
        <h2>Post Detail</h2>
        <p>{currPost.title}</p>
      </TitleWrapperStyle>

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
                    <img src={USER_IMG} alt="" />

                    <span>
                      <ChatAlt style={{ color: "var(--gray-1)" }} size={20} />
                    </span>
                  </Styled.AvatarSection>

                  <div>
                    <Styled.PostAuthorDescWrapper>
                      <p>
                        <a>{comment.email}</a>
                      </p>
                      <p>Commented 2h ago</p>
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
    </ContentWrapperStyle>
  );
};
