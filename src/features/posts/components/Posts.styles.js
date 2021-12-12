import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  text-align: center;

  @media (min-width: 1024px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TitleWrapper = styled.div`
  display: inline;
  margin-top: 20px;
  margin-bottom: 0px;

  @media (min-width: 640px) {
    margin: 16px auto 0px auto;
    max-width: 576px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 800;
    letter-spacing: -0.025em;

    @media (min-width: 640px) {
      font-size: 36px;
      line-height: 40px;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const PostList = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 48px;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: none;
  }
`;

export const PostTile = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
`;

export const PostImgWrapper = styled.div`
  img {
    height: 192px;
    width: 100%;
    object-fit: cover;
  }
`;

export const PostBody = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  p {
    text-align: left;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const PostCategoryP = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin: 0px;

  a {
    color: orange;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const PostContentWrapper = styled.a`
  display: block;
  margin: 12px 0px 0px;
`;

export const PostTitle = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin: 0px;
  color: var(--black-1);
`;

export const PostDescription = styled.p`
  margin: 12px 0px 0px;
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-1);
`;

export const PostAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const PostAuthorImgWrapper = styled.div`
  img {
    height: 40px;
    width: 40px;
    border-radius: 9999px;
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
  }

  div {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-1);

    span:first-of-type {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;
