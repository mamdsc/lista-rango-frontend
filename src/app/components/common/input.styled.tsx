import styled from 'styled-components';

interface IInputStyledProps {
   width?: string;
   marginTop?: string;
   marginBottom?: string;
}

const InputStyled = styled.div<IInputStyledProps>`
text-align: center;

input {
   width: ${p => p.width};
   height: 40px;
   border-radius: 20px;
   border: 1px solid ${p => p.theme.colors.white};
   box-shadow: 0px 2px 4px rgba(0,0,0,0.16);
   text-indent: 30px;
   outline-style: none;
   font-size: 15px;
   margin-top: ${p => p.marginTop};
   margin-bottom: ${p => p.marginBottom};
}
`;

export { InputStyled };