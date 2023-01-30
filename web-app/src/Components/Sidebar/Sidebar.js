import React from "react";

import {
  SidebarContainer,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";



const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/brothers" onClick={toggle}>
            Brothers
          </SidebarLink>
          <SidebarLink to="/recruitment" onClick={toggle}>
            Recruitment
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
