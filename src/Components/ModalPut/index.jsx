import ButtonForm from '../ButtonForm'
import Input from '../Input'
import InputSelect from '../InputSelecet'
import { ButtonContainer, Container, ModalContainer, ModalTitle } from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../Button'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { TechContext } from '../../Providers/Techs'

function ModalPut({ setShowModalPut, cardTech }){

    const { changeTech, deleteTech } = useContext(TechContext)

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

    const onSubmit = async (data) => {
        changeTech(cardTech.id, token, data)
        setShowModalPut(false)
    }

    const onClick = () => {
        deleteTech(cardTech.id, token)
        setShowModalPut(false)
    }

    return (
        <Container>
            <ModalContainer>
                <ModalTitle>
                    <h2>Tecnologia Detalhes</h2>
                    <Button onClick={() => setShowModalPut(false)}>X</Button>
                </ModalTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input value={cardTech.title} error={errors.title?.message}
                    register={register} label='Nome' name='title'/>
                    <InputSelect
                    value={cardTech.status}
                    options={options} 
                    register={register}
                    label='Selecionar status' 
                    name='status'
                    />
                    <ButtonContainer>
                        <ButtonForm className='buton1' type='submit'primary>Salvar alterações</ButtonForm>
                        <ButtonForm className='button2' type='button'onClick={onClick}>Excluir</ButtonForm>
                    </ButtonContainer>
                </form>
            </ModalContainer>
        </Container>
    )
}

export default ModalPut