import * as React from 'react';
import { Root } from './Root';
import { withRouter, RouteComponentProps } from 'react-router';
import { AppStyled } from './App.styled';

class App extends React.Component<RouteComponentProps<{}>> {
   public render(): JSX.Element {
      return (
         <AppStyled>
            <Root/>
         </AppStyled>
      );
   }
};
const AppWithRouter = withRouter(App);

export { AppWithRouter };
