import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthedRoute = React.memo(({ component: Component, ...rest }) => {
  const token = useSelector(state => state.token);
  return (
    <Route
      render={props => {
        if (token) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}, []);

export default UnAuthedRoute;
