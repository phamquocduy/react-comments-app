import React from "react";
import { useParams } from "react-router-dom";

import { PrimaryButton, OutlineButton } from "../../../components/bricks";
import { useUser } from "../hooks";

import * as Styled from "./UserDetail.styles";

const TEST_IMG_URL =
  "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";

export const UserDetail = () => {
  const { id: userId } = useParams();
  const { data: currUser } = useUser(userId);

  return (
    <Styled.MainContent>
      <Styled.DetailHeader>
        <Styled.Heading>
          <img src={TEST_IMG_URL} alt="" />

          <Styled.UserDescWrapper>
            <h1>{currUser?.name}</h1>
            <p>
              {currUser?.company?.bs}, {currUser?.company?.name}
            </p>
          </Styled.UserDescWrapper>
        </Styled.Heading>

        <Styled.ToolbarWrapper>
          <OutlineButton>Return to /Users</OutlineButton>
          <PrimaryButton>View all posts</PrimaryButton>
        </Styled.ToolbarWrapper>
      </Styled.DetailHeader>

      <Styled.DetailBody>
        <Styled.DetailBodyHeader>
          <h2>Adress</h2>
          <p>
            {currUser?.address?.street} {currUser?.address?.suite}, {currUser?.address?.city}
          </p>
        </Styled.DetailBodyHeader>

        <Styled.DetailBodyDl>
          <Styled.BodyDescItem>
            <dt>Username</dt>
            <dd>{currUser?.username}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Email address</dt>
            <dd>{currUser?.email}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Website</dt>
            <dd>{currUser?.website}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Phone</dt>
            <dd>{currUser?.phone}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem $colSpan="2">
            <dt>About</dt>
            <dd>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem $colSpan="2">
            <dt>Posts</dt>
            <dd>
              <Styled.BodyDescPostsUl>
                <Styled.BodyDescPostsLi>
                  <a href="">Post 1</a>
                </Styled.BodyDescPostsLi>
                <Styled.BodyDescPostsLi>
                  <a href="">Post 2</a>
                </Styled.BodyDescPostsLi>
              </Styled.BodyDescPostsUl>
            </dd>
          </Styled.BodyDescItem>
        </Styled.DetailBodyDl>
      </Styled.DetailBody>
    </Styled.MainContent>
  );
};
