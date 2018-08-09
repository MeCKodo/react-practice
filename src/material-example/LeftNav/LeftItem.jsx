import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';
import {UmiBase, RedDotBase} from './UMI';
import Badge from '@material-ui/core/Badge';

const Umi = styled(UmiBase)`
  position: absolute;
  top: 3px;
  left: 38px;
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .35s ease;
    transform: scale(.85);
`;

const UmiRight = styled(UmiBase)`
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity .2s ease;
  transform-origin: right;
  transform: scale(.85);
`;

const RedDot = styled(RedDotBase)`
  position: absolute;
  top: 5px;
  left: 40px;
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .35s ease;
`;

const RedDotRight = styled(RedDotBase)`
  opacity: ${props => props.open ? 1 : 0};
  transition: opacity .2s ease;
`;

const ListItem = styled(MuiListItem).attrs({ className : 'left-list-item' })`
  && {
    padding: 0;
    height: 48px;
    outline: none;
  }
  &.focus {
    a {
       background: ${props => props.color};
    }
  }
  &&:hover {
     // In order to make sure if active state it will be active's color
     // or hover's color
     svg {
        color: #9e9e9e; // 500
     }
  }
`;

const ListItemText = styled(MuiListItemText)`
  && {
    font-size: 12px;
    color: #9e9e9e;
    transform: translate3d(${props => props.open ? 12 : -10}px, 0, 0);
    opacity: ${props => props.open ? 1 : 0};
    transition: transform .2s ease, opacity .2s ease;
    padding: 0;
    span {
      color: #bfbfbf;
      transition: color .2s ease;
    }
  }
`;

const ListLink = styled(NavLink)`
  display:flex;
  outline: none;
  padding: 0 20px;
  height: 100%;
  width: 100%;
  align-items: center;
  &&:hover {
     background: ${props => props.color};
  }
  
  &&&:active {
    background: #D7EBF4 !important; // water
    span, svg {
     color: #0684BD;
    }
  }
  
  //background: red;
  // Switch tab style
  //&:focus {
  //  svg, span {
  //    color: #9E9E9E;
  //  }
  //  .left-list-item {
  //    background: #f5f5f5;
  //  }
  //}
  
  &&.active {
    //&:focus {
    //  li {
    //    background: #EBF6FA;
    //  }
    //}
    && svg, && span {
      color: #0684BD; // RC Blue
    }
  }
`;
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export default withRouter((props) => {
  const { open, url, type, icon : Icon, title, num } = props;
  // In order to make sure if active state it will be active's color
  // or hover's color
  const bgColor = props.location.pathname.indexOf(url) > -1 ? '#EBF6FA' : '#F5F5F5'; // Ice and 100
  
  return (
    <ListItem
      tabIndex='-1'
      button={true}
      disableRipple={true}
      focusVisibleClassName={'focus'}
      disableGutters={true}
      color={bgColor}
      open={open}>
      <ListLink color={bgColor}  to={`/material/${url}`}>
        <IconWrapper>
          <Icon/>
          {type === 'red' ?
            <RedDot open={open}/> :
            (type === 'umi' ? <Umi open={open}>{num}</Umi> : null)
          }
        </IconWrapper>
        <ListItemText primary={`${title}`} open={open}/>
        {type === 'red' ?
          <RedDotRight open={open}/> :
          (type === 'umi' ? <UmiRight open={open}>{num}</UmiRight> : null)
        }
      </ListLink>
    </ListItem>
  )
});
