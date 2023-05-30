import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand></SNavbarBrand>
        <RightNav>
         <Hello>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          </Hello>
          <Bye>
          <LoginButton>Login</LoginButton>
          <RegisterButton>Register</RegisterButton>
          </Bye>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: #ffffff;
  border-width: 2px 0;
  border-style: solid;
  border-color: #e76f1f;
`;
const NavContainer = styled.div`
  padding: 5px;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#E86E1F ;
  
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 27rem;
`;

const Hello = styled.div`
display: flex;
`;

const Bye = styled.div`
display: flex;
gap: 2rem;
`;

const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  align-items: center;     
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: #E86E1F;
  padding: 1rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: white;
    background-color: #E86E1F;
    box-shadow: 0px 0px 10px white;
    border-radius: 0.5rem;

  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  color: #E86E1F;
  border: 1px black solid;
  border-color: #E86E1F;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid  #E86E1F;
    color: white;
    background-color:  #E86E1F;
    box-shadow: 0px 0px 10px yellow;
  }
`;
const RegisterButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: #E86E1F;
  color: white;
  border: 1px black solid;
  border-color: #E86E1F;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px black solid;
    border-color: #E86E1F;
    color: #E86E1F;
    background-color:  white;
  }
`;
