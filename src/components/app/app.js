import Header from '../header'
import {
  Route,
  Routes,
} from 'react-router-dom'
import PageCreateUser from '../../pages/page-create-user'
import PageListUsers from '../../pages/page-list-users'
import './app.css'

const App = () => {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/users' element={<PageListUsers />} />
        <Route path='/create-user' element={<PageCreateUser />} />
        <Route path='/somethingelse' element={<PageCreateUser />} />
      </Routes>
    </div>
  )
}

export default App
