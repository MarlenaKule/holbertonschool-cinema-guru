import { useState } from 'react'
import './auth.css'
import Button from '../../components/general/Button'
import Login from './Login'
import Register from './Register'

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="auth-container" onSubmit={(e) => e.preventDefault()}>
      <div className="auth-header">
        <Button
          label="Sign In"
          className={`auth-tab ${_switch ? 'active' : ''}`}
          onClick={() => setSwitch(true)}
        />
        <Button
          label="Sign Up"
          className={`auth-tab ${!_switch ? 'active' : ''}`}
          onClick={() => setSwitch(false)}
        />
      </div>

      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </form>
  )
}

export default Authentication