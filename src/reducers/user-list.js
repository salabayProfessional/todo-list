const addUser = (state, payload) => {
  const users = state.users.users
  const newState = [...users, payload]

  return {
    users: newState
  }
}

const deleteUser = (state, userID) => {
    const users = state.users.users
    const index = users.findIndex((user) => user.id === userID)
    const beforeUsers = users.slice(0, index)
    const afterUsers = users.slice(index + 1, )
    const newState = [...beforeUsers, ...afterUsers]
  
  return {
    users: newState
  }
}

const updateUser = (state, user) => {
  const users = state.users.users
  const index = users.findIndex((userInfo) => userInfo.id === user.id)
  const updatedUser = {...users[index], ...user}
  const beforeUsers = users.slice(0, index)
  const afterUsers = users.slice(index + 1, )
  const newUsers = [...beforeUsers, updatedUser, ...afterUsers]

  return {
    users: newUsers
  }
}

const userList = (state, action) => {

  if (state === undefined) {
    return {
      users: [],
    }
  }

  switch(action.type) {
    case 'ADD_USER':
      return addUser(state, action.payload);

    case 'DELETE_USER':
      return deleteUser(state, action.payload);

    case 'UPDATE_USER':
      return updateUser(state, action.payload);

    default:
      return state.users;
  }
};

export default userList