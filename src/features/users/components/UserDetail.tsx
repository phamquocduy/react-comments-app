import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UseQueryResult } from "react-query";

import { PrimaryButton, OutlineButton } from "../../../components/bricks";
import { useUser } from "../hooks";
import { User } from "../types";

import * as Styled from "./UserDetail.styles";
import { USER_IMG } from "../../../constants/test-data";

export const UserDetail: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { id: userId } = useParams<{ id: string }>();
  const { data: currUser }: UseQueryResult<User, Error> = useUser(userId!);

  if (!currUser) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.MainContent>
      <Styled.DetailHeader>
        <Styled.Heading>
          <img src={USER_IMG} alt="" />

          <Styled.UserDescWrapper>
            <h1>{currUser.name}</h1>
            <p>
              {currUser.company.bs}, {currUser.company.name}
            </p>
          </Styled.UserDescWrapper>
        </Styled.Heading>

        <Styled.ToolbarWrapper>
          <OutlineButton onClick={() => navigate(`/users`)}>Return to /Users</OutlineButton>
          <PrimaryButton onClick={() => alert("TODO")}>View all user&apos;s posts</PrimaryButton>
        </Styled.ToolbarWrapper>
      </Styled.DetailHeader>

      <Styled.DetailBody>
        <Styled.DetailBodyHeader>
          <h2>Adress</h2>
          <p>
            {currUser.address.street} {currUser.address.suite}, {currUser.address.city}
          </p>
        </Styled.DetailBodyHeader>

        <Styled.DetailBodyDl>
          <Styled.BodyDescItem>
            <dt>Username</dt>
            <dd>{currUser.username}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Email address</dt>
            <dd>{currUser.email}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Website</dt>
            <dd>{currUser.website}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem>
            <dt>Phone</dt>
            <dd>{currUser.phone}</dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem $colSpan={2}>
            <dt>About</dt>
            <dd>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </Styled.BodyDescItem>
          <Styled.BodyDescItem $colSpan={2}>
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
