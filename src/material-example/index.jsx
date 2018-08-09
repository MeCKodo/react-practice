import React, {Component} from 'react';
import styled from 'styled-components';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import LeftNav from './LeftNav';

const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopBar = styled.div`
  display: flex;
  flex-basis: 70px;
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
        <TopBar>
          <Btn onClick={this.switchNavStatus}/>
        </TopBar>
        <LeftNav isOpen={isOpen} />
      </MaterialWrapper>
    )
  }
}
