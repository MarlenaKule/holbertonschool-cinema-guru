import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="auth-form">
      <h2 className="auth-title">Create a new account</h2>
      <Input
        label="Username:"
        type="text"
        className="auth-input"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password:"
        type="password"
        className="auth-input"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <Button label="Sign Up" className="auth-submit" onClick={() => {}} />
    </div>
  )
}

export default Register