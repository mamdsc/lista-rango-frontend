import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer } from './containers/home-container';

const Root = () => {
   return (
      <Switch>
         <Route
            path='/'
            component={HomeContainer}
            exact={true}
         />
      </Switch>
   )
}

export { Root };