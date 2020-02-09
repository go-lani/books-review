import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuth = Component => {
  function WrappedComponent(props) {
    const token = useSelector(state => state.token);
    if (token === null) {
      return <Redirect to="/signin" />;
    }
    return <Component {...props} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
};

export default withAuth;
