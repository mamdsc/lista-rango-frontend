import * as React from 'react';
import { Root } from './Root';
import { withRouter, RouteComponentProps } from 'react-router';

class App extends React.Component<RouteComponentProps<{}>> {
   public render(): JSX.Element {
      return <Root/>;
   }
};
const AppWithRouter = withRouter(App);

export { AppWithRouter };
