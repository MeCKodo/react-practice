import React, { Component } from "react";
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

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-basis: 200px;
`;

const TopCenter = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: ${props => {
    return props.screenSize > 900 ? 0 : 1;
  }};
  flex-basis: 700px;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default class TopBarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: null
    };
  }
  onWindowResize = () => {
    this.setState({
      screenSize: document.body.clientWidth
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  render() {
    return (
      <TopBar>
        <Wrapper>
          <TopLeft>
            <IconMenu
              onClick={this.props.handleMenuClick}
              open={this.props.isOpen}
            />
            <TopText variant="headline">Ringcentral</TopText>
          </TopLeft>
          <TopCenter screenSize={this.state.screenSize}>
            <ForwardBack />
            <SearchBar />
          </TopCenter>
          <TopRight>
            <More />
            <AvatarPresence />
          </TopRight>
        </Wrapper>
      </TopBar>
    );
  }
}
