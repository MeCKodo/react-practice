import React, {Component} from 'react';
import styled from 'styled-components';

const Umi = styled.div`
  width: ${props => props.type === 'red' ? 8 : 22}px;
  height: ${props => props.type === 'red' ? 8 : 15}px;
  border-radius: ${props => props.type === 'red' ? '50%' : '8px'};
  background: #FF8800;
  color:#fff;
  border:1px solid #fff;
  box-sizing: border-box;
`;

export default Umi;
