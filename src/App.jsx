import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { Home } from './routes/Home'
import { Nosotros } from './routes/Nosotros'
import { Contacto } from './routes/Contacto'
import { Login } from './routes/Login'
import { UserProvider } from './context/userContext'
import { CategoryProvider } from './context/categoryContext'
import './index.css'
import { Register } from './routes/Register'
import { initializeUsersInLocalStorage } from './utils/localStorage'

function App() {
  initializeUsersInLocalStorage()
  return (
    <UserProvider>
      <CategoryProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Layout >
      </CategoryProvider>
    </UserProvider>
  )
}

export default App
2