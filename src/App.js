import React from "react";
import { Focus, FinishNavigation } from "@curi/react-dom";
import Spinner from "react-spinkit";

import TopBar from './components/TopBar';
import LeftSideBar from './components/LeftSideBar';

const App = ({ response }) => {
  const leftBar = response.name === "Home" ? null : <LeftSideBar />;
  const { body:Body } = response;

  return (
    <div id="app">
      <TopBar />
      <div className='content'>
        {leftBar}
        <Focus>
          {ref => (
            <main tabIndex="-1" ref={ref}>
              <React.Placeholder
                delayMs={2000}
                fallback={<Spinner name="pulse" fadeIn="none" color="#000"/>}
              >
                <FinishNavigation>
                  <Body response={response} />
                </FinishNavigation>
              </React.Placeholder>
            </main>
          )}
        </Focus>
      </div>
    </div>
  );
};

export default App;
