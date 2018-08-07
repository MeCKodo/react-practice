import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import LeftIcon from './LeftIcon';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ButtonBase from '@material-ui/core/ButtonBase';
import UmiBase from './UMI';

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
const ListLink = styled(NavLink)`
  display:flex;
  width: 100%;
  &.active {
    svg, p {
      color: #0684BD;
    }
  }
`;

const ListButton = styled(ButtonBase)`
  && {
    justify-content: normal;
    margin: 0 20px;
    width: ${props => props.isOpen ? '100%' : '32px'};
    height: 32px;
  }
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
`;

const Lists = styled.ul`
  &:hover {
    svg {
      color:#9e9e9e;
    }
  }
`;
const ListItem = styled.li`
    width: 200px;
    display: flex;
    align-items: center;
    margin: 0 0 16px;
    &:hover {
      svg {
        color: #0684BD;
      }
    }
`;

const ListItemMsg = styled.p`
  display:inline-block;
  font-size: 14px;
  color:#444;
  padding: 0 0 0 20px;
  transform: translate3d(${props => props.isOpen ? 10 : -10}px, 0, 0);
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all .3s ease;
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
    console.log(this.state.isOpen);
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
            <ListItem>
              <ListLink to='/material/1'>
                <ListButton isOpen={isOpen}>
                  <LeftIcon isOpen={isOpen}/>
                  <ListItemMsg isOpen={isOpen}>message</ListItemMsg>
                </ListButton>
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink to='/material/2'>
                <ListButton isOpen={isOpen}>
                  <LeftIcon isOpen={isOpen}/>
                  <ListItemMsg isOpen={isOpen}>message</ListItemMsg>
                </ListButton>
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink to='/material/3'>
                <ListButton isOpen={isOpen}>
                  <LeftIcon isOpen={isOpen}/>
                  <ListItemMsg isOpen={isOpen}>message</ListItemMsg>
                </ListButton>
              </ListLink>
            </ListItem>
          </Lists>
          <Lists>
            <ListItem>
              <ListLink to='/material/3'>
                <ListButton isOpen={isOpen}>
                  <LeftIcon isOpen={isOpen}/>
                  <ListItemMsg isOpen={isOpen}>message</ListItemMsg>
                </ListButton>
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink to='/material/4'>
                <ListButton isOpen={isOpen}>
                  <LeftIcon isOpen={isOpen}/>
                  <ListItemMsg isOpen={isOpen}>message</ListItemMsg>
                </ListButton>
              </ListLink>
            </ListItem>
          </Lists>
        </LeftNavWrapper>
      </MaterialWrapper>
    )
  }
}
