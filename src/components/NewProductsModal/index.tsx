import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import './style.scss'

export function NewProductsModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay>
                <div className="overlay" />
            </Dialog.Overlay>
            <Dialog.Content>
                <div className="content-modal">
                    <Dialog.Title>Nova despensa</Dialog.Title>
                        <Dialog.DialogClose className="close-button">
                            <AiOutlineClose size={24} />
                        </Dialog.DialogClose>
                        <form>
                        <div className="form-group">
                            <label>Nome e descrição</label>
                            <input
                                type="text"
                                placeholder="Jaqueta de couro"
                            />
                            <textarea
                                placeholder="Descrição.."
                                cols={15}
                                rows={15}
                            />
                        </div>
                        <div className="form-group">
                            <label>Fotos</label>
                            <div className="image-uploads">
                                <input type="file" id='avatar' />
                            </div>
                            <p>Tamanho mínimo recomendado: 1024px</p>
                            <p>Formatos recomendados: PNG, JPEG ou GIF</p>
                        </div>
                        <button type="submit">Salvar produto</button>
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
        
    )
}