import styled from 'styled-components';

const UmiBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 15px;
  border-radius: 8px;
  background: #FF8800;
  font-size: 12px;
  color:#fff;
  border:1px solid #fff;
  box-sizing: border-box;
  //pointer-events: none;
`;

const RedDot = styled.div`
  width: 8px;
  height: 8px;
  color:red;
  pointer-events: none;
`;

export { UmiBase, RedDot };
