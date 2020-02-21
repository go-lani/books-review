import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuth = (Component, isSignIn = true) => {
  function WrappedComponent(props) {
    const token = useSelector(state => state.auth.token);
    if (isSignIn) {
      if (token === null) {
        return <Redirect to="/signin" />;
      }
    } else {
      if (token !== null) {
        return <Redirect to="/" />;
      }
    }

    return <Component {...props} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
};

export default withAuth;
