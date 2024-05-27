import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import convertToBase64 from '../../help/convert'
import * as z from 'zod'
import './style.scss'

const NewProductFormSchema = z.object({
    nameProd: z.
        string()
        .min(2, { message: 'O produto deve ter no mínimo 2 caracteres.' }),
    desc: z.string().optional(),
    imageProd: z.string().optional()
})

type NewProductInputs = z.infer<typeof NewProductFormSchema>

export function NewProductsModal() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewProductInputs>({
        resolver: zodResolver(NewProductFormSchema),
    })

    async function handleUploadFile(e: React.ChangeEvent<HTMLInputElement>) {
        const base64 = await convertToBase64(e.target.files?.[0])
        setValue('imageProd', base64)
    }

    async function handleNewProduct(data: NewProductInputs) {
        console.log(data)
    }

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
                    <form onSubmit={handleSubmit(handleNewProduct)}>
                        <div className="form-group">
                            <label>Nome e descrição</label>
                            <input
                                type="text"
                                placeholder="Jaqueta de couro"
                                {...register('nameProd')}
                            />
                            <textarea
                                {...register('desc')}
                                placeholder="Descrição.."
                                cols={10}
                                rows={12}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageProd">Foto</label>
                            <div className="image-uploads">
                                <input
                                    type="file"
                                    id='imageProd'
                                    onChange={handleUploadFile}
                                />
                            </div>
                            <p>Tamanho mínimo recomendado: 1024px</p>
                            <p>Formatos recomendados: PNG, JPEG ou GIF</p>
                        </div>
                        <button disabled={isSubmitting} type="submit">Salvar produto</button>
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Portal>

    )
}