import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import Favorite from "@material-ui/icons/Favorite";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

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

// const ListButton = styled(Button)`
//   && {
//     justify-content: normal;
//     width: ${props => (props.open ? "100%" : "32px")};
//     height: 32px;
//     border-radius: ${props => (props.open ? 2 : 0)}px;
//     transition: width 0.3s ease, background 0.3s ease;
//   }
//   &&:hover {
//     background: ${props => props.color};
//   }
// `;

const ListIcon = styled(Favorite)`
  && {
    padding: 8px;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
  }
`;

const IconMap = {
  Favorite: props => <Favorite {...props} />,
  FormatListBulleted: props => <FormatListBulleted {...props} />,
  NotificationImportant: props => <NotificationImportant {...props} />,
  AddIcon: props => <AddIcon {...props} />
};

export default withRouter(props => {
  const { open, url, type, name, ariaLabel, handleClick } = props;
  const bgColor =
    props.location.pathname.indexOf(url) > -1 ? "#cdf0ff" : "#F5F5F5";
  const Icon = IconMap[name];

  return (
    <IconButton aria-label={ariaLabel} onClick={handleClick}>
      <Icon />
    </IconButton>
  );
});
