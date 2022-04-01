import { Redirect, useHistory } from "react-router-dom"
import ButtonForm from "../../Components/ButtonForm"
import Input from "../../Components/Input"
import { Container, ContainerForm, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import api from "../../Services/api"
import { toast } from "react-toastify"

function Login({ authenticaded, setAuthenticaded}){

    const [showPassword, setShowPassword] = useState(true)

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    })

    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {

        const response = await api.post('/sessions', data).catch(err => {
            toast.error('Ops! Email ou senha inválido.', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })

        const {user, token} = response.data

        window.localStorage.clear()
        localStorage.setItem("@kenziehub:token", JSON.stringify(token))
        localStorage.setItem("@kenziehub:id", JSON.stringify(user.id))
        setAuthenticaded(true)
        return history.push('/dashboard')
    }

    const goSignup = () => history.push('/signup')

    if(authenticaded){
        return <Redirect to='/dashboard'/>
    }

    return (
        <Container>
             <Title>Kenzie Hub</Title>
             <ContainerForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <Input
                    error={errors.email?.message}
                    register={register} 
                    label='Email' 
                    name='email' 
                    placeholder="Digite seu email"
                    />
                    <Input
                    error={errors.password?.message}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword} 
                    icon={showPassword ? AiFillEye : AiFillEyeInvisible} 
                    type={showPassword ? 'password' : 'text'} 
                    register={register} 
                    label='Senha' 
                    name='password' 
                    placeholder='Digite sua senha'
                    />
                    <ButtonForm type='submit' primary>Entrar</ButtonForm>
                    <span to='/signup'>Ainda não possui uma conta?</span>
                    <ButtonForm onClick={goSignup} color >Cadastre-se</ButtonForm>
                </form>
             </ContainerForm>
        </Container>
    )
}

export default Login 