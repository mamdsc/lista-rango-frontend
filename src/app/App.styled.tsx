import styled from 'styled-components';

const AppStyled = styled.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html,
body,
#root {
  height: 100%;
}

 header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  background: #40E0D0;
  height: 40px;
 }
`;

export { AppStyled };