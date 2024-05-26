import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { DefaultLayout } from './Layout/DefaultLayout'

export function Router() {
    return (
        <Routes>
          <Route path='/' element={<DefaultLayout/>}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
      </Routes>
    )
}