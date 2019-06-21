import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/default';
import { ErrorStyled } from './error.styled';

const Error: React.StatelessComponent = props => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorStyled>
                {'Ops! Podemos ter perdido seus dados devido a instabilidade na internet'}
            </ErrorStyled>
        </ThemeProvider>
    );
}

export { Error };