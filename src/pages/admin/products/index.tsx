import { NewProductsModal } from "../../../components/NewProductsModal";
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdAddCircleOutline } from "react-icons/io";
import Icon from '../../../assets/react.svg'
import './style.scss'
import { Search } from "../../../components/search";

export function Products() {
  return (
    <div>
      <header>
        <h1>Produtos</h1>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <IoMdAddCircleOutline fontWeight={900} size={22} />
              Novo Produto
            </button>
          </Dialog.Trigger>
          <NewProductsModal />
        </Dialog.Root>
      </header>
      <section>
        <Search />
      </section>
      <main className="products-container">
        <section className="products-table">
          <div>
            <small>Nome</small>
            <small>Estoque</small>
            <small>Preço</small>
            <small>Promocional</small>
            <small>Ação</small>
          </div>
          <div>
            <span><img src={Icon} /> React</span>
            <span>21</span>
            <span>R$32</span>
            <span>R$12</span>
            <span><button >Excluir</button></span>
          </div>
        </section>
      </main>

    </div>

  );
}

