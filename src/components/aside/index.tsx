import { Link } from 'react-router-dom'
import './style.scss'
import { IoPricetagOutline } from 'react-icons/io5'
import { FaDollarSign } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
export function Aside() {
    return (
        <aside>
           <div className="sidebar-logo">
        <h2>Logo</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/admin">Página inicial</Link></li>
          <li><Link to="/admin/vendas"><FaDollarSign /> Vendas</Link></li>
          <li><Link to="/admin/products"><IoPricetagOutline /> Produtos</Link>
          </li>
          <li><Link to="/admin/clientes"><FaUserGroup /> Clientes</Link></li>
        </ul>
      </nav>
        </aside>
    )
}