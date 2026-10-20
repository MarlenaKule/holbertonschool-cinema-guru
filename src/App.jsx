import { useState } from 'react'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import Input from './components/general/Input'
import SelectInput from './components/general/SelectInput'
import Button from './components/general/Button'
import SearchBar from './components/general/SearchBar'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sort, setSort] = useState('latest')
  const [title, setTitle] = useState('')

  return (
    <div className="App" style={{ background: '#00003c', minHeight: '100vh', padding: '2rem' }}>
      <Input
        label="Username"
        type="text"
        className="test-input"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password"
        type="password"
        className="test-input"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <SelectInput
        label="Sort"
        options={['latest', 'oldest', 'highest rated', 'lowest rated']}
        className="test-select"
        value={sort}
        setValue={setSort}
      />
      <SearchBar title={title} setTitle={setTitle} />
      <Button
        label="Click me"
        className="test-button"
        icon={faUser}
        onClick={() => alert(`${username} / ${sort} / ${title}`)}
      />
    </div>
  )
}

export default App