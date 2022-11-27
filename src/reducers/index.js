import userList from './user-list';

const reducer = (state, action) => {
  return {
    users: userList(state, action)
  };
};

export default reducer;