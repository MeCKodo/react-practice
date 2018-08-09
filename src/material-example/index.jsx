import React, { Component } from "react";
import styled from "styled-components";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import LeftNav from "./LeftNav";
import TopBar from "./TopBar";

const MaxWidth = 200;
const MinWidth = 72;

const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LeftNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${props => (props.isOpen ? MaxWidth : MinWidth)}px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.25s ease;
  border-right: 1px solid #eee;
  padding: 25px 0;
`;

const Lists = styled.ul`
  margin: 0 20px;
  &:hover {
    svg {
      color: #9e9e9e;
    }
  }
`;

const Btn = styled(FormatListBulleted)`
  &:active {
    color: red;
  }
`;

export default class MaterialDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false,
    };
  }
  
  switchNavStatus = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen : !isOpen,
    });
  };
  
  render() {
    const { isOpen } = this.state;
    
    return (
      <MaterialWrapper>
        <TopBar handleMenuClick={this.switchNavStatus} isOpen={isOpen} />
        <LeftNav isOpen={isOpen} />
      </MaterialWrapper>
    )
  }
}
