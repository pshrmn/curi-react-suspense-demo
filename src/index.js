import React from 'react';
import ReactDOM from 'react-dom';
import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import { curiProvider } from '@curi/react-dom';
import active from '@curi/route-active';

import routes from './routes';
import App from './App';

const history = Browser();
const router = curi(history, routes, {
  route: [active()],
  suspend: true
});
const Router = curiProvider(router);

ReactDOM.render((
  <React.unstable_ConcurrentMode>
    <Router suspend={true}>
      {({ response }) => <App response={response} />}
    </Router>
  </React.unstable_ConcurrentMode>
), document.getElementById('root'));
