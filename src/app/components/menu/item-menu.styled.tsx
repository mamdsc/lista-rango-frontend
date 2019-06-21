import styled from 'styled-components';

const ItemMenuStyled = styled.div`
#modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${p => p.theme.colors.lightBlack};
}
 
#modal-content {
  background-color: ${p => p.theme.colors.white};
  margin: auto;
  padding: 20px;
  width: 601px;
  height: 484px;
  border-radius: 8px;
}
 
#close {
  color: ${p => p.theme.colors.black};
  float: right;
  font-size: 28px;
  font-weight: bold;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: ${p => p.theme.colors.white};
  margin-top: -40px;
  margin-right: -40px;
  border-color: rgba(0,0,0,0.16);
}

img {
  width: 553px;
  height: 196px;
  margin-left: 23px;
}

h1 {
  font-size: 24px;
}

#price {
  height: 39px;
  width: 132px;
  font-size: 32px;
  color: ${p => p.theme.colors.blue};
  float: right;
  margin-top: 40px;
  margin-left: 80px;
}

p {
  font-size: 16px;
  width: 380px;
  height: 65px;
}

#info {
  flex-direction: row;
  display: flex;
}
`;

export { ItemMenuStyled };