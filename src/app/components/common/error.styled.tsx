import styled from 'styled-components';

const ErrorStyled = styled.div`
font-size: 24px;
color: ${p => p.theme.colors.blue}
margin: 0;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`;

export { ErrorStyled };