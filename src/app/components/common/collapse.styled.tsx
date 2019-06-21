import styled from 'styled-components';

interface ICollapseStyledProps {
  open: boolean;
}

const CollapseStyled = styled.div<ICollapseStyledProps>`

button {
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 23px;
  font-weight: bold;
  font-size: 16px;
}

#collapsible {
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border-bottom: 2px solid;
  border-color: #404040;
  margin-bottom: 5px;
  text-align: left;
  outline: none;
}

i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  float: right;
}

${props => props.open ? `
#right {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}` : `
#right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}`
}

`;

export { CollapseStyled };