import { Routes, Route, useLocation } from 'react-router-dom'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Admin } from './pages/admin'
import { Aside } from './components/aside'
import { Products } from './pages/admin/products'

export function Router() {
  const location = useLocation();
  const showAside = location.pathname.startsWith('/admin');
  return (
    <div className='app'>
      {showAside && <Aside />}
      <div  className={`content ${showAside ? 'with-sidebar' : ''}`}>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/" element={<Admin />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>
        </Routes>
      </div>

    </div>
  )
}