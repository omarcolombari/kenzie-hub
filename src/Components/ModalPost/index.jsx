import ButtonForm from '../ButtonForm'
import Input from '../Input'
import InputSelect from '../InputSelecet'
import { Container, ModalContainer, ModalTitle } from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../Button'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { TechContext } from '../../Providers/Techs'

function ModalPost({ setShowModalPost }){

    const { addTech } = useContext(TechContext)

    const [options] = useState([
        'Iniciante',
        'Intermediário',
        'Avançado'
    ])
    const [token] = useState(
        JSON.parse(localStorage.getItem('@kenziehub:token')) || ""
        )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório')
    })


    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit =  (data) => {
        addTech(token, data)
        setShowModalPost(false)
    }

    return (
        <Container>
            <ModalContainer>
                <ModalTitle>
                    <h2>Cadastrar técnologia</h2>
                    <Button onClick={() => setShowModalPost(false)}>X</Button>
                </ModalTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input error={errors.title?.message}
                    register={register} label='Nome' name='title'/>
                    <InputSelect 
                    options={options} 
                    register={register}
                    label='Selecionar status' 
                    name='status'
                    />
                    <ButtonForm type='submit'primary>Cadastrar</ButtonForm>
                </form>
            </ModalContainer>
        </Container>
    )
}

export default ModalPost