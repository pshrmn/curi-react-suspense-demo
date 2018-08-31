import React from "react";
import { Focus } from "@curi/react-dom";

import TopBar from './components/TopBar';
import LeftSideBar from './components/LeftSideBar';

const App = ({ response }) => {
  const leftBar = response.name === "Home"
    ? null
    : <LeftSideBar />
  const { body:Body } = response;
  return (
    <div id="app">
      <TopBar />
      <div className='content'>
        {leftBar}
        <Focus>
          {ref => (
            <main tabIndex="-1" ref={ref}>
              <Body response={response} />
            </main>
          )}
        </Focus>
      </div>
    </div>
  );
};

export default App;
