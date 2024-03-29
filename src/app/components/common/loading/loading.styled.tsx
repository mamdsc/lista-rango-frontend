import styled from 'styled-components';

const LoadingStyled = styled.div`
text-align: center;

#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 16px solid ${p => p.theme.colors.blue};
  border-radius: 50%;
  border-top: 16px solid ${p => p.theme.colors.white};
  width: 70px;
  height: 70px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export { LoadingStyled };