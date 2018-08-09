import styled from 'styled-components';

const UmiBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 5px;
  border-radius: 12px;
  background: #FF8800;
  font-size: 12px;
  color:#fff;
  border:1px solid #fff;
  box-sizing: border-box;
`;

const RedDotBase = styled.div`
  width: 8px;
  height: 8px;
  background: #FF8800;
  border-radius: 50%;
`;

export { UmiBase, RedDotBase };
