import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 20px;
  background: #FFF;
  height: 80px;
  width: 97%;
  /* border: 5px solid;
  border-color: #f4f4f4; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .logo-content {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`