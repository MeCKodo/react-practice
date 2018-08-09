import React from 'react';
import styled from "styled-components";
import MuiDrawer from "@material-ui/core/Drawer/index";
import MuiList from "@material-ui/core/List/index";

import LeftItem from './LeftItem';
import ListsArr from './LeftIcon';

const MaxWidth = 200;
const MinWidth = 72;

const List = styled(MuiList).attrs({className:'left-list'})`
  &:first-child {
    .left-list-item {
      .left-icon {
        margin: 0 0 0 3px;
      }
    }
  }
  &:nth-last-child(1) {
    .left-list-item {
      height: 40px;
      .left-icon {
        font-size: 18px;
        margin: 0 0 0 6px;
      }
    }
  }
`;

const Drawer = styled(MuiDrawer)`
  
  && {
    flex: auto;
    display:flex;
    width: ${props => props.open ? MaxWidth : MinWidth}px;
    height: 100%;
    transition: all .25s ease;
  }
  
  .left-paper {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    width: ${props => props.open ? MaxWidth : MinWidth}px;
    justify-content: space-between;
    padding: 24px 0;
    box-sizing: border-box;
    transition: all .25s ease;
    // this group btns will awake
    &:hover {
      .left-icon {
        color: #9e9e9e; // 500
      }
      span {
        color: #616161; // 700
      }
    }
  }
`;

export default (props) => {
  const { isOpen } = props;
  
  return (
    <Drawer variant="permanent" open={isOpen} classes={{paper: 'left-paper'}} >
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
                    {...item}
                    open={isOpen}>
                  </LeftItem>)
              }
            </List>
          )
        })
      }
    </Drawer>
  )
}
