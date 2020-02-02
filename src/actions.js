// TOKEN 상태관리
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

// 로딩에 관한 action
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

// 에러 피드백 상태관리
export const SET_FEED_COMMENT = "SET_FEED_COMMENT";
export const SET_FEED_VISIBLE = "SET_FEED_VISIBLE";

export const setFeedComment = comment => ({
  type: SET_FEED_COMMENT,
  comment,
});

export const setFeedVisible = () => ({
  type: SET_FEED_VISIBLE,
});
