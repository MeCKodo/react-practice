import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const StyledAvatar = styled(Avatar)`
  && {
    width: ${props => changeSize(props)};
    height: ${props => changeSize(props)};
  }
`;

const changeSize = props => {
  switch (props.size) {
    case "large":
      return "40px";
    case "medium":
      return "32px";
    case "small":
      return "24px";
    default:
      return "32px";
  }
};

export default props => {
  return <StyledAvatar size={props.size} {...props} />;
};
