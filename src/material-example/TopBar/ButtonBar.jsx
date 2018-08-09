import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/ButtonBase/index";
import { NavLink, withRouter } from "react-router-dom";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "./IconButton";

const ButtonBar = styled.div`
  display: flex;
`;

const ListItem = styled.span`
  margin: 0 0 24px;
`;

const ListLink = styled(NavLink)`
  display: flex;
  width: 100%;
  &.active {
    svg,
    p {
      color: #0684bd !important;
    }
  }
`;

const ListButton = styled(Button)`
  && {
    justify-content: normal;
    width: ${props => (props.open ? "100%" : "32px")};
    height: 32px;
    border-radius: ${props => (props.open ? 2 : 0)}px;
    transition: width 0.3s ease, background 0.3s ease;
  }
  &&:hover {
    background: ${props => props.color};
  }
`;

const ListIcon = styled(Favorite)`
  && {
    padding: 8px;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
  }
`;

export default withRouter(props => {
  const { open, url, type } = props;
  const bgColor =
    props.location.pathname.indexOf(url) > -1 ? "#cdf0ff" : "#F5F5F5";

  return (
    <ButtonBar>
      <IconButton name="Favorite" />
      <IconButton name="Favorite" />
      <IconButton name="Favorite" />
    </ButtonBar>
  );
});
