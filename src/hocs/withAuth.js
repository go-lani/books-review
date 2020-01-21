import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = Component => {
  // 1. WrappedComponent 함수가 통으로 넘어가고
  // 2. props를 받음
  // 3. 분기 처리를 하여
  // 4. 컴포넌트를 리턴하는데, 이때 prop를 받은 것을 포함하여 리턴
  // 5. 리렌더링?
  function WrappedComponent(props) {
    // props에는 원본 Home컴포넌트에서 받는 prop를 가지고 있다
    const token = localStorage.getItem("token");
    if (token === null) return <Redirect to="/signin" />;

    return <Component {...props} token={token} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
};

export default withAuth;
