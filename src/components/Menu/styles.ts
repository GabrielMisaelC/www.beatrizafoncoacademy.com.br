import styled from 'styled-components';

export const Container = styled.div`
  padding: 3px 3px;
  background: #FFF;
  height: 40px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 2;
  gap: 100;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`

  >ul{
    display: flex;
    flex: 2;
    /* gap: 100; */
    justify-content: 'center';
    list-style: none;
  }

  @media screen and (max-width:   900px) {
    align-items: center;
    >ul{
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 80px;
      width: 90%;
      background: #DCDC;
      border-top: 2px solid #191970;
      z-index: 5;
      >li{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40%;
      }
    }
    .Hamburger{
      position: absolute;
      right: 5%;
      cursor: pointer;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  gap: 100;
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
