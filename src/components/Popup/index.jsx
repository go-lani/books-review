import React, { useState, useEffect } from "react";
import { PopupLayout, Dim, PopupInner, CloseButton } from "./indexStyled";

const Popup = ({ visible, hide, children }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <PopupLayout>
      <Dim disappear={!visible} onClick={hide} />
      <PopupInner disappear={!visible}>
        <CloseButton onClick={hide}>취소</CloseButton>
        {children}
      </PopupInner>
    </PopupLayout>
  );
};

export default Popup;
