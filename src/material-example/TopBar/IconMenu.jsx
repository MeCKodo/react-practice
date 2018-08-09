import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "@material-ui/core/ButtonBase/index";
import IconButton from "@material-ui/core/IconButton";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Tooltip from "@material-ui/core/Tooltip";

const StyledButton = styled(IconButton)`
  && {
    transition: background 0.3s ease;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    svg {
      color: ${props => (props.open ? "#0684bd !important" : "#bfbfbf")};
      transition: color 0.3s ease;
    }
  }
  &:hover {
    background: #d7ebf4;
    svg {
      color: #0684bd !important;
    }
  }
`;

export default props => {
  return (
    <Tooltip disableFocusListener title="Menu">
      <StyledButton {...props}>
        <FormatListBulleted />
      </StyledButton>
    </Tooltip>
  );
};
