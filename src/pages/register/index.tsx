import './style.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { NavLink } from 'react-router-dom'

const newAccountFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'O nome de usuário deve ter pelo menos 2 caracteres' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Use apenas letras, números ou traços' }),
  email: z.
    string()
    .min(1, { message: 'O email não pode estar vazio' })
    .email('Email inválido'),
  password: z.string().min(4, { message: 'A senha deve conter pelo menos 4 caracteres' }),
  confirmPassword: z.string(),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

type NewAccountInputs = z.infer<typeof newAccountFormSchema>

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewAccountInputs>({
    resolver: zodResolver(newAccountFormSchema),
  })

  async function handleCreatAccount(data: NewAccountInputs) {
    console.log(data)
  }

  return (
    <div className='container'>
      <h1>Criar conta</h1>
      <form className='register-form' onSubmit={handleSubmit(handleCreatAccount)}>
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" id="username" {...register('username')} />
        <span className='span-erros'>{errors.username?.message ? errors.username?.message : ''}</span>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        <span className='span-erros'>{errors.email?.message ? errors.email?.message : ''}</span>

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register('password')} />
        <span className='span-erros'>{errors.password?.message ? errors.password?.message : ''}</span>

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input type="password" id="confirmPassword" {...register('confirmPassword')} />
        <span className='span-erros'>{errors.confirmPassword?.message ? errors.confirmPassword?.message : ''}</span>

        <button type="submit" disabled={isSubmitting}>Criar conta</button>
        <p>
          Tem um conta?
          <NavLink to="/" title='Cadastrar'>
            Acessar conta
          </NavLink>
        </p>

      </form>
    </div>
  )
}

