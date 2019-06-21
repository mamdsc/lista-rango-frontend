import * as React from 'react';
import { LoadingStyled } from './loading.styled';

const Loading: React.StatelessComponent = props => {
    return (
        <LoadingStyled>
            <div id="loader"/>
        </LoadingStyled>
    );
}

export { Loading };