import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeParent from './HomePage/HomeParent';
import DetailsParent from './SauceDetailsPage/DetailsParent';
import AddSauceParent from './AddSaucePage/AddSauceParent';
import createAppStore from '../store/store';

const store = createAppStore();

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={HomeParent} />
          <Route path="/addsauce" component={AddSauceParent} />
          <Route path="/details/:id" component={DetailsParent} />
        </Fragment>
      </HashRouter>
    </Provider>
  );
}
