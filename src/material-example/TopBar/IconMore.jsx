import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "@material-ui/core/ButtonBase";
import AddCircle from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";

const StyledButton = styled(Button)`
  && {
    margin-right: 12px;
    svg {
      font-size: 20px;
      color: ${props => (props.open ? "#0684bd !important" : "#bfbfbf")};
      transition: color 0.3s ease;
    }
  }
`;

const IconMore = styled(AddCircle)`
  &:hover {
    color: #0684bd !important;
  }
`;

export default props => {
  return (
    <Tooltip disableFocusListener title="More">
      <StyledButton {...props}>
        <IconMore />
      </StyledButton>
    </Tooltip>
  );
};
