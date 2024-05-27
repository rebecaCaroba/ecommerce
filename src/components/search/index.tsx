import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import './style.scss'

const searchFormSchema = z.object({
    query: z.string().min(2, 'Deve ter no mínimo 2 caracteres para a pesquisa.'),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
      })

    async function handleSearchProd(data: SearchFormInputs) {
        console.log(data.query)
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit(handleSearchProd)}>
            <input type="text"
            placeholder="Busque por produtos" 
            {...register('query')}
            />
            <button type="submit" className="btnSearch" disabled={isSubmitting}>Buscar</button>
         </form>
        </div>
    )
}