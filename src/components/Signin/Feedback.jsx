import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setFeedVisible } from "../../actions";
import { Feed } from "./FeedbackStyled";

const Feedback = ({ visible, feedComment, setFeedVisible }) => {
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    let hide;

    if (localVisible) {
      hide = setTimeout(() => {
        setFeedVisible();
        clearTimeout(hide);
      }, 1800);
    }

    setLocalVisible(visible);

    return () => {
      clearTimeout(hide);
    };
  }, [visible, localVisible, setFeedVisible]);

  if (!localVisible) return null;

  return <Feed>{feedComment}</Feed>;
};

export default connect(
  state => ({
    feedComment: state.feed.comment,
  }),
  dispatch => ({ setFeedVisible: () => dispatch(setFeedVisible()) }),
)(Feedback);
