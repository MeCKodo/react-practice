import React from 'react';
import styled from 'styled-components';
import Favorite from '@material-ui/icons/Favorite';
import UmiBase from './UMI';

const Umi = styled(UmiBase)`
  position: absolute;
  bottom: 15px;
  left: 15px;
  opacity: ${props => props.isOpen ? 0 : 1};
  transition: opacity .2s ease;
`;

const LeftIcon = styled(Favorite)`
  
  ${props => !props.open ?`&&:hover {
    background: #99ffee;
    border-radius: 0px;
  }` : null}
  
  && {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 0;
    color: #bfbfbf;
    transition: all .3s ease;
  }
`;

export default (props) => {
  const { isOpen } = props;
  return (
    <React.Fragment>
      <LeftIcon open={isOpen} />
      <Umi isOpen={isOpen}>22</Umi>
    </React.Fragment>
  )
};
