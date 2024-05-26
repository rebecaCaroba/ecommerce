import { NewProductsModal } from "../../../components/NewProductsModal";
import * as Dialog from '@radix-ui/react-dialog'
import './style.scss'
import { IoMdAddCircleOutline } from "react-icons/io";

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
      <main>
        Sem produtos...
      </main>

      <section>
        Search
      </section>

    </div>

  );
}

