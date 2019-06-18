import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer } from './containers/home-container';
import { CardapioContainer } from './containers/cardapio-container';

const Root = () => {
   return (
      <Switch>
         <Route
            path='/'
            component={HomeContainer}
            exact={true}
         />
         <Route
            path='/cardapio/:id'
            component={CardapioContainer}
            exact={true}
         />
      </Switch>
   )
}

export { Root };