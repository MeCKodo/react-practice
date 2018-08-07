import React from 'react';
import Button from "@material-ui/core/ButtonBase/index";
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Favorite from '@material-ui/icons/Favorite';

import UmiBase from './UMI';

const Umi = styled(UmiBase)`
    position: absolute;
    left: 21px;
    bottom: 21px;
  
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .2s ease;
`;

const ListItem = styled.li`
  margin: 0 0 24px;
`;

const Text = styled.p`
  font-size: 14px;
  color:#444;
  transform: translate3d(${props => props.open ? 12 : -10}px, 0, 0);
   margin: 0 40px 0 0;
  opacity: ${props => props.open ? 1 : 0};
  transition: all .3s ease;
`;

const ListLink = styled(NavLink)`
  display:flex;
  width: 100%;
  &.active {
    svg, p {
      color: #0684BD !important;
    }
  }
`;

const ListButton = styled(Button)`

  && {
    justify-content: normal;
    width: ${props => props.open ? '100%' : '32px'};
    height: 32px;
    border-radius: ${props => props.open ? 2 : 0}px;
    transition: all .3s ease;
  }
  &&:hover {
      background: ${props => props.color};
    }
`;

const ListIcon = styled(Favorite)`
  && {
    padding: 8px;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
  }
`;


export default withRouter((props) => {
  const { open, url, type } = props;
  const bgColor = props.location.pathname.indexOf(url) > -1 ? '#cdf0ff': '#F5F5F5';
  
  return (
    <ListItem>
      <ListLink to={`/material/${url}`}>
        <ListButton color={bgColor} open={open}>
          <ListIcon />
          <Umi open={open}>22</Umi>
          <Text open={open}>message</Text>
          <UmiBase >22</UmiBase>
        </ListButton>
      </ListLink>
    </ListItem>
  )
});
