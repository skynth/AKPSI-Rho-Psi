import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;

  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0C406F;
  display: grid;
  font-family: STIX Two Text;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "90%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
  font-size: 1.2rem;
  margin: 10px;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  padding: 0;
  list-style-type: none;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 70px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(8, 60px);
  }

`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;


  &:hover {
    text-decoration: none;
    color: #414b52;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;


