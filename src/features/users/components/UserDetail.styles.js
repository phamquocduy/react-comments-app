import styled from "styled-components";

export const MainContent = styled.main`
  min-height: 100%;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const DetailHeader = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;

  img {
    height: 64px;
    width: 64px;
    border-radius: 9999px;
  }
`;

export const UserDescWrapper = styled.div`
  margin-right: 0px;
  margin-left: 20px;

  * {
    margin: 0px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: var(--black);
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--gray-1);
  }
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: stretch;
  margin-top: 24px;
  margin-bottom: 16px;

  > :first-child {
    margin-top: 6px;
  }

  @media (min-width: 640px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-right: 0px;
    margin-top: 24px;
    margin-bottom: 0px;

    > :first-child {
      margin-top: 0px;
      margin-left: 12px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
    margin-right: 0px;

    > :first-child {
      margin-top: 0px;
      margin-left: 0px;
    }

    > :last-child {
      margin-left: 12px;
    }
  }
`;

export const DetailBody = styled.div`
  max-width: 768px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;

  @media (min-width: 640px) {
    border-radius: 8px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 1280px;
  }
`;

export const DetailBodyHeader = styled.div`
  padding: 8px 16px;

  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: var(--gray-dark-1);
  }

  p {
    margin-top: 4px;
    max-width: 672px;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-1);
  }
`;

export const DetailBodyDl = styled.dl`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 32px;
  border-top: 1px solid var(--gray-light-1);
  padding: 20px 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BodyDescItem = styled.div`
  @media (min-width: 640px) {
    grid-column: ${({ $colSpan = 1 }) => `span ${$colSpan} / span ${$colSpan}`};
  }

  > :first-child {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--gray-dark-1);
  }

  > :nth-child(2) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
    color: var(--gray-1);
  }
`;

export const BodyDescPostsUl = styled.ul`
  padding-left: 0px;
  border: 1px solid var(--gray-light-1);
  border-radius: 6px;
  border-bottom: none;
  list-style-type: none;
`;

export const BodyDescPostsLi = styled.li`
  padding: 12px 16px;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid var(--gray-light-1);

  a {
    font-weight: 500;
    color: var(--blue-1);
  }
`;
