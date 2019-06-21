import * as React from 'react';
import { LoadingStyled } from './loading.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/default';

const Loading: React.StatelessComponent = props => {
    return (
        <ThemeProvider theme={theme}>
            <LoadingStyled>
                <div id="loader"/>
            </LoadingStyled>
        </ThemeProvider>
    );
}

export { Loading };