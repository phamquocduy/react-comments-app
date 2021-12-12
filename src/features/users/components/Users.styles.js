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

export const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 32px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    column-gap: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    column-gap: 32px;
    row-gap: 48px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export const UserWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 0px;
`;

export const UserImage = styled.img`
  border: 2px solid transparent;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 80px;
  border-radius: 9999px;

  :hover {
    border-color: var(--blue-1);
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: 96px;
    height: 96px;
  }
`;

export const UserDesc = styled.div`
  margin-top: 8px;
  margin-bottom: 0px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
