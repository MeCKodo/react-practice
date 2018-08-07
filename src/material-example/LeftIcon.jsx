import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const LeftIconWrapper = styled(IconButton)`
  &&:hover {
    background: #99ffee;
  }
  && {
    width: 35px;
    height: 35px;
    border-radius: 0;
  }
`;

const LeftIcon = styled(DeleteIcon)`
  color: red;
`;

export default () => <LeftIconWrapper><LeftIcon></LeftIcon></LeftIconWrapper>;
