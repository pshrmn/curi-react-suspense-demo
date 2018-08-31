import React from "react";
import { Active, Link } from "@curi/react-dom";

const ActiveLink = ({ to, params, partial, ...rest }) => (
  <Active name={to} params={params} partial={partial}>
    {active => (
      <Link
        to={to}
        params={params}
        {...rest}
        className={active ? "active": ""}
      />
    )}
  </Active>
)

export default ActiveLink;
