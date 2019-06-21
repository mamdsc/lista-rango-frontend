import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../theme/default';
import { ErrorStyled } from './error.styled';

interface IErrorProps {
    msg?: string;
}

const Error: React.StatelessComponent<IErrorProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorStyled>
                {props.msg}
            </ErrorStyled>
        </ThemeProvider>
    );
}

Error.defaultProps = {
    msg: 'Ops! Podemos ter perdido seus dados devido a instabilidade na internet'
}

export { Error };