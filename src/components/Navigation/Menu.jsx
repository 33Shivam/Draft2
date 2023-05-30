import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  color:#E86E1F ;
  z-index: 1;


  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
    color: white;
    background-color: #E86E1F;
    z-index: 1;

  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  &:hover {
    transition: 0.5s ease;
    color: white;
    background-color: #E86E1F;
    box-shadow: 0px 0px 10px white;
    border-radius: 1rem;
    z-index: 1;

  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  z-index: 1;

  &:hover {
    transition: 0.3s ease-in;
    color: #E86E1F ;
    background-color: white;
    z-index: 1;
  }
`;
