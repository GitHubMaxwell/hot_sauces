import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeGrid from './HomeGrid';
import Details from './Details';
import AddSauce from './AddSauce';
import createAppStore from '../store/store';

const store = createAppStore();

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={HomeGrid} />
          <Route path="/addsauce" component={AddSauce} />
          <Route path="/details/:id" component={Details} />
        </Fragment>
      </HashRouter>
    </Provider>
  );
}
