import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';
import MuiBadge from '@material-ui/core/Badge';

const ListItem = styled(MuiListItem).attrs({ className : 'left-list-item' })`
  && {
    padding: 0;
    height: 48px;
    outline: none;
  }
  // In order to make sure use tab switch nav
  &&.left-item-focus {
    .left-link {
       background: ${props => props.color};
       
    }
    .left-icon {
      color:#9e9e9e; // 500
    }
    span {
      color:#616161; // 700
    }
  }
  &&:hover {
     // In order to make sure if active state it will be active's color
     // or hover's color
     .left-icon {
        color: #9e9e9e; // 500
     }
  }
`;

const ListItemText = styled(MuiListItemText)`
  && {
    color: #9e9e9e; // 500
    transform: translate3d(${props => props.open ? 12 : -10}px, 0, 0);
    opacity: ${props => props.open ? 1 : 0};
    transition: transform .2s ease, opacity .2s ease;
    padding: 0;
    span {
      color: #bfbfbf; // Aah
      font-size: 14px;
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
    span, .left-icon {
     color: #0684BD; // RC Blue
    }
  }
  
  &&.active {
    && .left-icon, && span {
      color: #0684BD; // RC Blue
    }
  }
`;

const BaseBadge = styled(MuiBadge)`
    span {
      ${props => !props.num ? `
        height: 8px;
        width: 8px;
        border-radius:50%
      ` : `
        width: auto;
        height: auto;
        padding: 1px 5px;
        border-radius: 16px;
        transform: scale(.8);
      `};
      opacity: ${props => props.open ? 0 : 1};
      transition: opacity .2s ease;
      background: #FF8800; // RC orange
      border: 1px solid #fff;
      color: #fff !important;
      box-sizing: border-box;
      display: ${props => props.type ? 'block' : 'none'};
    }
`;

const Badge = styled(BaseBadge)`
    span {
      ${props => props.num ? `
        top: -8px;
        left: 18px;
        right: auto;
      ` : `
        left: 20px;
        top: -4px;
      `};
    }
`;

const RightBadge = styled(BaseBadge)`
    span {
      ${props => props.num ? `
        top: -9px;
        right: -2px;
      ` : `
        right: 0px;
        top: -5px;
      `};
    }
`;

export default withRouter((props) => {
  const { open, url, type, icon : Icon, title, num } = props;
  // In order to make sure if active state it will be active's color
  // or hover's color
  const bgColor = props.location.pathname.indexOf(url) > -1 ? '#EBF6FA' : '#F5F5F5'; // Ice and 100
  const badge = {
    badge: num ? 'umi' : 'red-dot'
  };
  return (
    <ListItem
      tabIndex='-1'
      button={true}
      disableRipple={true}
      focusVisibleClassName={'left-item-focus'}
      disableGutters={true}
      color={bgColor}
      open={open}>
      <ListLink className={'left-link'} color={bgColor}  to={`/material/${url}`}>
        <Badge
              num={num}
              classes={badge}
              open={open}
              type={type}
               badgeContent={num ? num : ''}
               color="primary">
          <Icon className={'left-icon'}/>
        </Badge>
        <ListItemText open={open}>{title}</ListItemText>
        <RightBadge
                num={num}
                classes={badge}
                open={!open}
                type={type}
                badgeContent={num ? num : ''}
               color="primary">
           <i></i>
        </RightBadge>
      </ListLink>
    </ListItem>
  )
});
