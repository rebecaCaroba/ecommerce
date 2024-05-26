import { Link } from 'react-router-dom'
import './style.scss'
export function Aside() {
    return (
        <aside>
           <div className="sidebar-logo">
        <h2>Logo</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/admin">Página inicial</Link></li>
          <li><Link to="/admin/vendas">Vendas</Link></li>
          <li><Link to="/admin/products">Produtos</Link></li>
          <li><Link to="/admin/clientes">Clientes</Link></li>
        </ul>
      </nav>
        </aside>
    )
}