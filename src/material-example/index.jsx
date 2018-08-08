import React, {Component} from 'react';
import styled from 'styled-components';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiList from '@material-ui/core/List';
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

const Lists = styled(MuiList)`
  &:hover {
    svg {
      color: #9e9e9e;
    }
    span {
      color: #212121;
    }
  }
`;

const Drawer = styled(MuiDrawer)`
    && {
      flex: auto;
      display:flex;
      width: ${props => props.open ? MaxWidth : MinWidth}px;
      height: 100%;
    }
    
    & > div {
      position: relative;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      width: ${props => props.open ? MaxWidth : MinWidth}px;
      justify-content: space-between;
            padding: 24px 0;
      box-sizing: border-box;
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
        <Drawer variant="permanent" open={isOpen} >
          {
            (
              ListsArr.map((arr, index) => {
                return (<Lists component="nav"
                               disablePadding={true}
                               key={index}>
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
            )
          }
        </Drawer>
      </MaterialWrapper>
    )
  }
}
