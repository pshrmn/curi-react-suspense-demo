import React from "react";
import { Link } from "@curi/react-dom";
import Spinner from "react-spinkit";
import { css } from "emotion";

export default function SpinnerLink({ children, color = "#fff", ...rest }) {
  return (
    <Link {...rest}>
      {navigating => (
        <React.Fragment>
          {children}
          {navigating
            ? <Spinner
                name="pulse"
                fadeIn="none"
                color={color}
                className={css`
                  display: inline-block;
                  height: 20px;
                `}
              />
            : null
          }
        </React.Fragment>
      )}
    </Link>
  );
}
