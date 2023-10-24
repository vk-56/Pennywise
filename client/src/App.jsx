import { createContext, useState } from 'react'
import { Header } from './components/navbar/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { SimpleRegistrationForm } from './components/signup/Signup'
import { Login } from './components/signup/Login'
import { useOutlet } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import StarsCanvas from './components/signup/StarsCanvas'

export const AppContext = createContext()

function App() {
  /* To check user clicks on Sidebar icon */
  const [isMounted, setIsMounted] = useState(true)

  /* To check if user is authenticated (temporary) */
  const [isAuth, setIsAuth] = useState(false)

  /* To check if user is newly registered (temporary) */
  const [isNewUser, setIsNewUser] = useState(false)

  /* Placeholder for Router components */
  const outlet = useOutlet()

  return (
      <AppContext.Provider value = { {isMounted, setIsMounted, isAuth, setIsAuth, setIsNewUser}}>  
        { isAuth ? ( 
            <div className='flex h-full w-full min-h-screen'>
              {isMounted && <Sidebar />}
              <div className='flex flex-col w-full min-h-screen'>
                <Header />
                {outlet || <Welcome />}
              </div>
            </div> 
          )
          : (
              isNewUser ? (
                <SimpleRegistrationForm />
              ) : (
                <div className='relative z-0'>
                <Login />
                <StarsCanvas />
                </div>
              )
          )
        }
      </AppContext.Provider>
  )
}

export default App
