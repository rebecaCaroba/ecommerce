import './style.scss'
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const LoginAccountFormSchema = z.object({
  username: z.
    string()
    .min(2, { message: 'O nome de usuário deve ter no mínimo 2 caracteres.' }),
  password: z.string().min(4, { message: 'A senha deve ter no mínimo 4 caracteres.' }),
})

type LoginAccountInputs = z.infer<typeof LoginAccountFormSchema>

// interface Data {
//   message: string;
// }

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginAccountInputs>({
    resolver: zodResolver(LoginAccountFormSchema),
  })

  const navigate = useNavigate();

  // const [data, setData] = useState<Data | null>(null);

  async function handleLoginAccount(data: LoginAccountInputs) {
    console.log(data)
    // try {
    //   const response = await api.get<Data>('/teste')
    //   setData(response.data)
    //   console.log(data)
    // } catch (err) {
    //   if (err instanceof AxiosError && err?.response?.data?.message) {
    //     alert(err.response.data.message)
    //     return
    //   }
    //   console.log(err)
    // }

    navigate('/admin')
  }

  return (
      <div className="container">
      <h1>Olá novamente</h1>
        <form onSubmit={handleSubmit(handleLoginAccount)} className="login-form">
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" {...register('username')} />
          <span className='span-erros'>{errors.username?.message ? errors.username?.message : ''}</span>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register('password')} />
          <span className='span-erros'>{errors.password?.message ? errors.password?.message : ''}</span>
          
          <button type="submit" disabled={isSubmitting}>Entrar</button>
          {/* {data ? <p>{data.message}</p> : <p>Loading...</p>} */}
          <p>
            Não tem um conta?
            <NavLink to="/register" title='Cadastrar'>
              Criar conta
            </NavLink>
          </p>
        </form>
      </div>

  )
}

