import React from 'react';
import ReactDOM from 'react-dom';
import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import { CuriProvider } from '@curi/react-dom';
import active from '@curi/route-active';

import routes from './routes';
import App from './App';

const history = Browser();
const router = curi(history, routes, {
  route: [active()],
  suspend: true
});

ReactDOM.render((
  <React.unstable_AsyncMode>
    <CuriProvider router={router} suspend={true}>
      {({ response }) => <App response={response} />}
    </CuriProvider>
  </React.unstable_AsyncMode>
), document.getElementById('root'));
