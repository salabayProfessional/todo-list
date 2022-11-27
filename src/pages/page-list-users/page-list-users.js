import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import List from '../../components/list'
import ListItem from '../../components/list-item'

const PageListUsers = () => {
  const [search, setSearch] = useState('')
  const users = useSelector(state => state.users.users)

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredUsers = users.filter((user) => user.name.includes(search))
  const correctUsers = filteredUsers ? filteredUsers : users

  return (
    <div className='page'>
      <h1>LIST USERS</h1>
      <div>
        <input className='basic-field' onChange={onSearch} value={search} placeholder='search use by name' />

        <List items={correctUsers}>
          {(user) => <ListItem user={user} key={user.id} />}
        </List>
      </div>
    </div>
  )
}

export default PageListUsers

  // const deleteUser = (userData) => {
  //   const index = users.findIndex((user) => user.email === userData.email)
  //   const beforeUsers = users.slice(0, index)
  //   const afterUsers = users.slice(index + 1, )
  //   const newUsers = [...beforeUsers, ...afterUsers]
  //   setUsers(newUsers)
  // }

  // const updateUser = (userData) => {
  //   const index = users.findIndex((user) => user.email === userData.email)

  //   const updatedUser = {...users[index], name, surname, email, address, phoneNumber}
  //   const beforeUsers = users.slice(0, index)
  //   const afterUsers = users.slice(index + 1, )
  //   const newUsers = [...beforeUsers, updatedUser, ...afterUsers]
  //   setUsers(newUsers)
  // }