import React from 'react';
import styled from "styled-components";
import MuiDrawer from "@material-ui/core/Drawer/index";
import MuiList from "@material-ui/core/List/index";

import LeftItem from './LeftItem';
import ListsArr from './LeftIcon';

const MaxWidth = 200;
const MinWidth = 72;

const List = styled(MuiList)`
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

export default () => {
  const { isOpen } = this.props;
  
  return (
    <Drawer variant="permanent" open={isOpen} >
      {
        ListsArr.map((arr, index) => {
          return (
            <List component="nav"
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
            </List>
          )
        })
      }
    </Drawer>
  )
}
