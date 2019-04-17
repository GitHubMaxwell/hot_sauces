import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './Menu';
import HomeGrid from './HomeGrid';
import Details from './Details';
import createAppStore from '../store/store';

const store = createAppStore();

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Menu />
          <Route exact path="/" component={HomeGrid} />
          <Route path={`/details/:id`} component={Details} />
        </Fragment>
      </HashRouter>
    </Provider>
  );
}
