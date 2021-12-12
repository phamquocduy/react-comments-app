import React from "react";
import { useNavigate } from "react-router-dom";

import { useUsers } from "../hooks";

import * as Styled from "./Users.styles";

const TEST_IMG_URL =
  "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";

export const Users = () => {
  const navigate = useNavigate();
  const { data: users } = useUsers();

  if (!users) {
    return "Error...";
  }

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <h2>Users</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
      </Styled.TitleWrapper>

      <Styled.UserList>
        {users.map((user) => (
          <li key={user.id}>
            <Styled.UserWrapper>
              <Styled.UserImage src={TEST_IMG_URL} alt={user.name} onClick={() => navigate(`/users/${user.id}`)} />
              <Styled.UserDesc>
                <h3>{user.name}</h3>
                <a href="mailto: abc@example.com">{user.email}</a>
              </Styled.UserDesc>
            </Styled.UserWrapper>
          </li>
        ))}
      </Styled.UserList>
    </Styled.Wrapper>
  );
};
