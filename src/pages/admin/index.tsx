import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import './style.scss'

export function Admin() {
    return (
        <div className="container-admin">
        <h1>Oi, Rock!</h1>
        <p>Que tal continuar configurando sua loja?</p>
        <div className="cards">
          <div className="card">
            <CiCircleCheck />
            <div className="card-content">
              <h2>Layout</h2>
              <Link to="/personalizar">Personalizar</Link>
            </div>
          </div>
          <div className="card">
            <CiCircleCheck />
            <div className="card-content">
              <h2>Produtos</h2>
              <Link to="products">Adicionar</Link>
            </div>
          </div>
          <div className="card">
            <CiCircleCheck />
            <div className="card-content">
              <h2>Forma de entrega</h2>
              <Link to="/configurar-entrega">Configurar</Link>
            </div>
          </div>
        </div>
      </div>
    )
}