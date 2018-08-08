import React from 'react';
import Button from "@material-ui/core/ButtonBase/index";
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import {Umi as UmiBase} from './UMI';

const Umi = styled(UmiBase)`
  position: absolute;
  left: 41px;
  bottom: 28px;
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .2s ease;
`;

const UmiRight = styled(UmiBase)`
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity .2s ease;
`;

const ListItem = styled.li`

`;

const Title = styled(Typography)`
  && {
    font-size: 14px;
    color: #9e9e9e;
    transform: translate3d(${props => props.open ? 12 : -10}px, 0, 0);
     margin: 0 40px 0 0;
    opacity: ${props => props.open ? 1 : 0};
    transition: transform .3s ease, opacity .3s ease;
  }
`;

const ListLink = styled(NavLink)`
  display:flex;
  width: 100%;
  outline: none;
  
  &:focus {
    svg, p {
      color: #9E9E9E;
    }
    button {
      background: #F5F5F5;
    }
  }
  &.active {
    svg, p {
      color: #0684BD !important;
    }
    &:focus {
      background: red;
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
  const { open, url, type, icon: Icon, title } = props;
  const bgColor = props.location.pathname.indexOf(url) > -1 ? '#EBF6FA' : '#F5F5F5';
  
  return (
    <ListItem>
      <ListLink to={`/material/${url}`}>
        <ListButton color={bgColor} open={open}>
          <Icon />
          <Umi open={open}>22</Umi>
          <Title open={open}>{title}</Title>
          <UmiRight open={open}>22</UmiRight>
        </ListButton>
      </ListLink>
    </ListItem>
  )
});
