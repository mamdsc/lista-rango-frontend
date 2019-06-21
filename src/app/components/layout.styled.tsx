import styled from "styled-components";

const LayoutStyled = styled.div`
font-family: ${p => p.theme.fonts.FontTheme};
color: ${p => p.theme.colors.gray};

header {
  width: 100%;
  top: 0;
  left: 0;
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.blue};
  height: 62px;
  position: absolute;
}

#btnVoltar {
  text-decoration: none;
  background-color: ${p => p.theme.colors.transparent};
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 23px;
  color: ${p => p.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
}

`
;

export { LayoutStyled };