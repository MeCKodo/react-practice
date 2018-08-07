import React, {Component} from 'react';
import styled from 'styled-components';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import LeftItem from './LeftItem';

const MaxWidth = 200;
const MinWidth = 72;

const MaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopBar = styled.div`
  display: flex;
  flex-basis: 70px;
`;

const LeftNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${props => props.isOpen ? MaxWidth : MinWidth}px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all .25s ease;
  border-right: 1px solid #eee;
  padding: 25px 0;
`;

const Lists = styled.ul`
  margin: 0 20px;
  &:hover {
    svg {
      color:#9e9e9e;
    }
  }
`;

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false,
      test : false,
    };
  }
  
  switchNavStatus = () => {
    const { isOpen, test } = this.state;
    this.setState({
      isOpen : !isOpen,
      test : !test,
    });
  };
  
  render() {
    const { isOpen, test } = this.state;
    
    return (
      <MaterialWrapper>
        <TopBar>
          <FormatListBulleted onClick={this.switchNavStatus}/>
        </TopBar>
        <LeftNavWrapper isOpen={isOpen} test={test}>
          <Lists>
            <LeftItem url='1' open={isOpen} />
            <LeftItem url='2' open={isOpen} />
            <LeftItem url='3' open={isOpen} />
          </Lists>
          <Lists>
            <LeftItem url={'4'} open={isOpen} type={'red'} />
            <LeftItem url={'5'} open={isOpen} type={'red'} />
            <LeftItem url={'6'} open={isOpen} type={'red'} />
            <LeftItem url={'7'} open={isOpen} />
          </Lists>
        </LeftNavWrapper>
      </MaterialWrapper>
    )
  }
}
