import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Tooltip from "@material-ui/core/Tooltip";

// const IconBack = styled(ChevronLeft)`
//   && {
//     font-size: 20px;
//     color: #bfbfbf;
//     transition: color 0.3s ease;
//   }
//   &:active {
//     color: #0684bd !important;
//   }
//   &:hover {
//     color: #0684bd !important;
//   }
// `;

// const IconForward = styled(ChevronRight)`
//   && {
//     font-size: 20px;
//     color: #bfbfbf;
//     transition: color 0.3s ease;
//   }
//   &:active {
//     color: #0684bd !important;
//   }
//   &:hover {
//     color: #0684bd !important;
//   }
// `;

const StyledButton = styled(IconButton)`
  && {
    transition: background 0.3s ease;
    border-radius: 2px;
    width: 28px;
    height: 28px;
    svg {
      font-size: 20px;
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
    <React.Fragment>
      <Tooltip disableFocusListener title="Back">
        <StyledButton {...props}>
          <ChevronLeft />
        </StyledButton>
      </Tooltip>
      <Tooltip disableFocusListener title="Forward">
        <StyledButton {...props}>
          <ChevronRight />
        </StyledButton>
      </Tooltip>
    </React.Fragment>
  );
};
