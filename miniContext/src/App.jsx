import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import './App.css'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Ayush Ranjan</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
