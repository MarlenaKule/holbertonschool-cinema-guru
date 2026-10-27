import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Dashboard from './routes/dashboard/Dashboard'
import Authentication from './routes/auth/Authentication'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    // Shtojmë këtë kontroll: Nëse nuk ka token, nuk bëjmë kërkesë fare!
    if (!accessToken) {
      return; 
    }

    axios
      .post(
        'http://localhost:8000/api/auth/',
        {},
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        setIsLoggedIn(true)
        setUserUsername(response.data.username)
      })
      .catch((error) => {
        console.log(error)
        // Nëse token-i skadon ose është i pavlefshëm, e fshijmë që të mos bllokohet faqja
        localStorage.removeItem('accessToken');
      })
  }, [])

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  )
}

export default App