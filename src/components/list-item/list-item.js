import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_user, update_user } from '../../actions/actions'
import './list-item.css'

const getUpdatedUser = (user) => {
  const name = prompt('name:', user.name)
  const surname = prompt('surname:', user.surname)
  const email = prompt('email:', user.email)
  const address = prompt('address:', user.address)
  const phoneNumber = prompt('phone:', user.phoneNumber)
  
  return {
    name, surname, email, address, phoneNumber
  }
}

const ListItem = ({user}) => {
  const { name, surname, email, phoneNumber, address, id} = user
  const dispatch = useDispatch()

  const updateHandler = () => {
    const updatedUser = getUpdatedUser(user)
    dispatch(update_user({...updatedUser, id}))
  }

    return (
      <li className='list__item'>
        <p>
          name: {name}
        </p>
        <p>
          surname: {surname}
        </p>

        <p>
          email: {email}
        </p>
        <p>
          phone: {phoneNumber}
        </p>
        <p>
          address: {address}
        </p>
        <div className='list__item-bottom'>
          <div>
            <button type='button' className='basic-button' onClick={() => dispatch(delete_user(id))}>Delete</button>
            <button type='button' className='basic-button' onClick={updateHandler}>Update</button>
          </div>
        </div>
      </li>
    )
}

export default ListItem