import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconMenu from "./IconMenu";
import ForwardBack from "./ForwardBack";
import ButtonBar from "./ButtonBar";
import SearchBar from "./SearchBar";
// import IconButton from "./IconButton";
import AvatarPresence from "./AvatarPresence";
import More from "./More";

const TopBar = styled(AppBar).attrs({ position: "static" })`
  && {
    background-color: #fff;
    box-shadow: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
`;
const Wrapper = styled(Toolbar)`
  && {
    justify-content: space-between;
    padding: 0 20px;
  }
  &:hover {
    svg {
      color: #9e9e9e;
    }
  }
`;
const TopText = styled(Typography)`
  && {
    color: #0684bd;
    font-size: 26px;
    margin: 0 20px;
  }
`;

const Div1 = styled.div`
  display: flex;
      flex-shrink: 0;
    flex-basis: 250px;
`;

const Div2 = styled.div`
  display: flex;
flex-grow: 1;
    flex-basis: 700px;
`;

const Div3 = styled.div`
  display: flex;
flex-grow: 1;
    flex-basis: 200px;
    justify-content: flex-end;
`;

export default props => {
  return (
    <TopBar>
      <Wrapper>
        <Div1>
          <IconMenu onClick={props.handleMenuClick} open={props.isOpen} />
          <TopText variant="headline">Ringcentral</TopText>
        </Div1>
        <Div2>
          <ForwardBack />
          <SearchBar />
        </Div2>
        <Div3>
          <More />
          <AvatarPresence />
        </Div3>
      </Wrapper>
    </TopBar>
  );
};
