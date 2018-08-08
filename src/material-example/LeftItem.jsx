import React from 'react';
import Button from "@material-ui/core/ButtonBase/index";
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';
import {Umi as UmiBase} from './UMI';

const Umi = styled(UmiBase)`
  position: absolute;
  left: 41px;
  bottom: 28px;
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .2s ease;
`;

const ListItem = styled(MuiListItem)`
  && {
    padding: 0 20px;
    height: 48px;
  }
  &&:hover {
     background: ${props => props.color};
     svg {
        color: #9e9e9e;
     }
  }
`;

const UmiRight = styled(UmiBase)`
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity .2s ease;
`;

const ListItemText = styled(MuiListItemText)`
  && {
    font-size: 12px;
    color: #9e9e9e;
    transform: translate3d(${props => props.open ? 12 : -10}px, 0, 0);
    opacity: ${props => props.open ? 1 : 0};
    transition: transform .3s ease, opacity .3s ease;
    padding: 0;
    span {
      color: #bfbfbf;
      transition: color .2s ease;
    }
  }
`;

const ListLink = styled(NavLink)`
  display:flex;
  width: 100%;
  outline: none;
  align-items:center;
  &:focus {
    svg, span {
      color: #9E9E9E;
    }
    button {
      background: #F5F5F5;
    }
  }
  &.active {
    svg, span {
      color: #0684BD !important;
    }
  }
`;

const ListButton = styled(Button)`
  && {
    justify-content: normal;
    width: 100%;
    height: 48px;
    padding: 0 0 0 20px;
    border-radius: ${props => props.open ? 2 : 0}px;
    transition: width .3s ease, background .3s ease;
  }
  
  &&:hover {
     background: ${props => props.color};
     svg {
        color:#9e9e9e;
     }
  }
`;

export default withRouter((props) => {
  const { open, url, type, icon : Icon, title } = props;
  const bgColor = props.location.pathname.indexOf(url) > -1 ? '#EBF6FA' : '#F5F5F5';
  
  return (
    <ListItem tabIndex='-1'
              button={true}
              disableGutters={true}
              color={bgColor}
              open={open}>
      <ListLink to={`/material/${url}`}>
        <Icon />
        <Umi open={open}>22</Umi>
        <ListItemText primary={`${title}`} open={open} />
        <UmiRight open={open}>22</UmiRight>
      </ListLink>
    </ListItem>
  )
});
