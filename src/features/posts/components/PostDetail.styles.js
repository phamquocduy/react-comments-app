import styled from "styled-components";

import { CircleCornersStyle } from "../../../global-styles";

export const PostCoverWrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  div {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 90%);
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 48px;
`;

export const CommentsWrapper = styled.ul`
  list-style-type: none;

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const BlockWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const ConnectionLine = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  margin-left: -1px;
  height: 100%;
  width: 2px;
  background-color: var(--gray-light-1);
`;

export const CommentContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;

  * {
    text-align: left;
  }
`;

export const AvatarSection = styled.div`
  position: relative;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: var(--gray-light-1);

    ${CircleCornersStyle}
  }

  span {
    position: absolute;
    bottom: -2px;
    right: -4px;
    background-color: white;
    border-top-left-radius: 4px;
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const PostAuthorDescWrapper = styled.div`
  margin-left: 12px;

  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    margin: 0px;

    a:hover {
      text-decoration: underline;
    }

    :nth-of-type(2) {
      color: var(--gray-1);
    }
  }
`;

export const PostAuthorCommentWrapper = styled.div`
  margin-top: 8px;
  margin-left: 12px;

  p {
    margin: 0px;

    :first-of-type {
      font-weight: 700;
    }
  }
`;
