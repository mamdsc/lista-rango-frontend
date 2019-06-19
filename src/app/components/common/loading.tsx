import * as React from 'react';
import { LoadingStyled } from './loading.styled';

const Loading: React.StatelessComponent = props => {
    return (
        <LoadingStyled>
            <div className="loader"/>
        </LoadingStyled>
    );
}

export { Loading };