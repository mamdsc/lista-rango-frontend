import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer } from './containers/home-container';
import { MenuContainer } from './containers/menu-container';

const Root = () => {
   return (
      <Switch>
         <Route
            path='/'
            component={HomeContainer}
            exact={true}
         />
         <Route
            path='/menu/:id'
            component={MenuContainer}
            exact={true}
         />
      </Switch>
   )
}

export { Root };