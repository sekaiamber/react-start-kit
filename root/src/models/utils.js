export default {
  namespace: 'Utils',
  state: {
    pathname: '',
    history: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        dispatch({ type: 'updateCurrentPathName', pathname, history });
      });
    },
  },
  effects: {
    * goBack(_, { select }) {
      const history = yield select(({ Utils }) => Utils.history);
      history.goBack();
    },
  },
  reducers: {
    updateCurrentPathName(state, { pathname, history }) {
      return { ...state, pathname, history };
    },
  },
};
