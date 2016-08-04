import SC from 'soundcloud';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import App from './components/App';
import Callback from './components/Callback';
import StreamContainer from './components/Stream';
import userStore from './stores/userStore';
import trackStore from './stores/trackStore';

useStrict(true);

const stores = { userStore, trackStore };

ReactDOM.render(
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StreamContainer} />
        <Route path="/" component={StreamContainer} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);