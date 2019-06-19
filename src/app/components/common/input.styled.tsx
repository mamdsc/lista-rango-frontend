import styled from 'styled-components';

interface IInputStyledProps {
   width?: string;
   margin?: string;
}

const InputStyled = styled.div <IInputStyledProps>`
text-align: center;

input {
   width: ${props => props.width};
   height: 40px;
   border-radius: 20px;
   border: 1px solid #FFF;
   box-shadow: 5px 5px 5px #aaaaaa;
   text-indent: 30px;
   outline-style: none;
   font-size: 15px;
   margin: ${props => props.margin};
}
`;

export { InputStyled };