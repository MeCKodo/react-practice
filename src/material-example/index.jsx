import React, {Component} from 'react';
import styled from 'styled-components';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import LeftItem from './LeftItem';
import ListsArr from './LeftIcon';

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
  transition: all .2s ease;
  border-right: 1px solid #eee;
  padding: 24px 0;
`;

const Lists = styled.ul`
  &:hover {
    svg {
      color: #9e9e9e;
    }
    p {
      color: #212121;
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
    const { isOpen } = this.state;
    
    return (
      <MaterialWrapper>
        <TopBar>
          <FormatListBulleted onClick={this.switchNavStatus}/>
        </TopBar>
        <LeftNavWrapper isOpen={isOpen}>
          {
            ListsArr.map((arr, index) => {
              return (<Lists key={index}>
                {
                  arr.map(item =>
                    <LeftItem
                      key={item.url}
                      url={item.url}
                      open={isOpen}
                      title={item.title}
                      icon={item.icon}>
                    </LeftItem>)
                }
              </Lists>)
            })
          }
        </LeftNavWrapper>
      </MaterialWrapper>
    )
  }
}
