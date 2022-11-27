export const add_user = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  };
};

export const delete_user = (userID) => {
  return {
    type: 'DELETE_USER',
    payload: userID
  };
};

export const update_user = (user) => {
  return {
    type: 'UPDATE_USER',
    payload: user
  };
};
