import styled from "styled-components";

const HomeContainerStyled = styled.div`
h1 {
  margin-top: 90px;
  text-align: center;
  font-family: ${p => p.theme.fonts.FontTheme};
  color: ${p => p.theme.colors.gray};
  font-size: 24px;
  font-weight: normal;
}`;

export { HomeContainerStyled };