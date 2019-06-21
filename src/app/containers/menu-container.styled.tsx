import styled from "styled-components";

const MenuContainerStyled = styled.div`

margin: 74px;

#retangulo {
  width: 282px;
  height: 765px;
  background-color: ${p => p.theme.colors.lightGray};
  float: right;
}

#menu {
  width: 791px;
  display: inline-block;
}`;

export { MenuContainerStyled };