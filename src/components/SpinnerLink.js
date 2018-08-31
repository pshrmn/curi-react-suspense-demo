import React from "react";
import { Link } from "@curi/react-dom";
import Spinner from "react-spinkit";
import { css } from "emotion";

export default ({ children, color = "#fff", ...rest }) => (
  <Link {...rest}>
    {navigating => (
      <React.Fragment>
        {children}
        {navigating
          ? <Spinner
              name="pulse"
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
