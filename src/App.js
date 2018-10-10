import React from "react";
import { Focus, FinishNavigation } from "@curi/react-dom";
import Spinner from "react-spinkit";

import TopBar from './components/TopBar';
import LeftSideBar from './components/LeftSideBar';
import { PLACEHOLDER_DELAY } from "./resourceTimers";

const App = ({ response }) => {
  const leftBar = response.name === "Home" ? null : <LeftSideBar />;
  const { body:Body } = response;

  return (
    <div id="app">
      <TopBar />
      <div className='content'>
        {leftBar}
        <Focus preventScroll={true}>
          {ref => (
            <main tabIndex="-1" ref={ref}>
              <React.unstable_Suspense
                maxDuration={PLACEHOLDER_DELAY}
                fallback={
                  <FinishNavigation>
                    <Spinner name="pulse" fadeIn="none" color="#000"/>    
                  </FinishNavigation>
                }
              >
                <FinishNavigation>
                  <Body response={response} />
                </FinishNavigation>
              </React.unstable_Suspense>
            </main>
          )}
        </Focus>
      </div>
    </div>
  );
};

export default App;
