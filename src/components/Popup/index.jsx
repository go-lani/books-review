import React, { useState, useEffect } from "react";
import { PopupLayout, Dim, PopupInner, CloseButton } from "./indexStyled";

const Popup = ({ visible, children, hidePopup }) => {
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
      <Dim disappear={!visible} onClick={hidePopup} />
      <PopupInner disappear={!visible}>
        <CloseButton onClick={hidePopup}>취소</CloseButton>
        {children}
      </PopupInner>
    </PopupLayout>
  );
};

export default Popup;
