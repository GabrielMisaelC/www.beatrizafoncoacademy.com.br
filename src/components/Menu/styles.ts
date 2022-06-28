import styled from 'styled-components';

export const Container = styled.div`
  padding: 3px 3px;
  background: #FFF;
  height: 40px;
  width: 40%;
  /* border: 5px solid;
  border-color: #f4f4f4; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 2;
  
`;

export const Column = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  gap: 100;

  .logo-content {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  background-color: #DCDCDC
  font-family: 'Secular One';
  font-size: 12px;
  background-color: #DCDCDC;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-width: 0px;
  border-style: inset;
  display: inline-block;
`;