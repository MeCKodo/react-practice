import React, { Component } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";
import TopBar from "./TopBar";

const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
