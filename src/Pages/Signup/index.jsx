import { Redirect, useHistory } from "react-router-dom"
import ButtonForm from "../../Components/ButtonForm"
import Input from "../../Components/Input"
import { Container, ContainerForm, ContainerTitle, Title } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import InputSelect from "../../Components/InputSelecet"
import Button from "../../Components/Button"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useState } from "react"

function Signup({authenticaded}){

    const [options] = useState([
        'Primeiro módulo (Introdução ao Frontend)',
        'Segundo módulo (Frontend Avançado)',
        'Terceiro módulo (Introdução ao Backend)',
        'Quarto módulo (Backend Avançado)'
    ])


    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
        confirmPassword: yup.string().required('Campo obrigatório')
        .min(6).oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
        course_module: yup.string().required('Campo obrigatório'),
        bio: yup.string().required('Campo obrigatório'),
        contact: yup.string().required('Campo obrigatório')

    })

    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        delete data.confirmPassword

        api.post('/users', data)
        .then(res =>{
            toast.success('Conta criada com sucesso!', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
            goLogin()
        })
        .catch(err => {
            toast.error('Ops! Algo deu errado', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
    }

    const goLogin = () => history.push('/')

    if(authenticaded){
        return <Redirect to='/dashboard'/>
    }

    return (
        <Container>
            <ContainerTitle>
                <Title>Kenzie Hub</Title>
                <Button onClick={goLogin}>Voltar</Button>
            </ContainerTitle>
             <ContainerForm error={Object.keys(errors)}> 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Crie sua conta</h2>
                    <span>Rapido e grátis, vamos nessa</span>
                    <Input
                    error={errors.name?.message}
                    register={register} 
                    label='Nome' 
                    name='name' 
                    placeholder="Digite aqui seu nome"
                    />
                    <Input
                    error={errors.email?.message}
                    register={register} 
                    label='Email' 
                    name='email' 
                    placeholder="Digite aqui seu email"
                    />
                    <Input 
                    error={errors.password?.message}
                    register={register}
                    type='password'
                    label='Senha' 
                    name='password' 
                    placeholder="Digite aqui sua senha"
                    />
                    <Input
                    error={errors.confirmPassword?.message}
                    register={register}
                    type='password'
                    label='Confirme sua senha' 
                    name='confirmPassword' 
                    placeholder="Digite novamente sua senha"
                    />
                    <Input
                    error={errors.bio?.message}
                    register={register} 
                    label='Insira sua descrição' 
                    name='bio' 
                    placeholder="Digite sua descrição"
                    />
                    <Input
                    error={errors.contact?.message}
                    register={register} 
                    label='Contato' 
                    name='contact' 
                    placeholder="Digite seu contato (LinkedIn)"
                    />
                    <InputSelect
                    options={options}
                    register={register} 
                    label='Selecionar módulo' 
                    name='course_module' 
                    />
                    <ButtonForm primary >Cadastrar</ButtonForm>
                </form>
             </ContainerForm>
        </Container>
    )
}

export default Signup 