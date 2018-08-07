import React from 'react';
import styled from 'styled-components';
import Favorite from '@material-ui/icons/Favorite';
import UmiBase from './UMI';

const Umi = styled(UmiBase)`
  position: absolute;
      bottom: 17px;
    left: 19px;
  opacity: ${props => props.open ? 0 : 1};
  transition: opacity .2s ease;
`;

const LeftIcon = styled(Favorite)`
  ${props => !props.open ?`&&:hover {
    background: #${props.active ? 'D7EBF4' : 'f5f5f5'};
    border-radius: 0px;
  }` : null}
  
  && {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 0;
    color: #bfbfbf;
    transition: all .3s ease;
    box-sizing: border-box;
  }
`;

export default (props) => {
  const { open, active, type } = props;
  console.log(active, '-------')
  return (
    <React.Fragment>
      <LeftIcon active={active} open={open} />
      <Umi open={open} type={type}>22</Umi>
    </React.Fragment>
  )
};
