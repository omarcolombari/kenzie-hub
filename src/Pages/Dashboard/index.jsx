import { useContext, useEffect, useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import Button from '../../Components/Button'
import ModalPost from '../../Components/ModalPost'
import ModalPut from '../../Components/ModalPut'
import Card from "../../Components/Card"
import { Cabeçalho, Header, Main, Navbar, TechsContainer } from './style'
import { UserContext } from '../../Providers/Users'
import { TechsContext } from '../../Providers/Techs'

function Dashboard({ authenticaded, setAuthenticaded }){

    const { user, loadUser } = useContext(UserContext)
    const { techs, loadTechs} = useContext(TechsContext)
    const history = useHistory()
    const [showModalPost, setShowModalPost] = useState(false)
    const [showModalPut, setShowModalPut] = useState(false)
    const [cardTech, setCardTech] = useState({})
    

    /*const loadUser = async () => {
        const id = JSON.parse(localStorage.getItem('@kenziehub:id'))
        const response = await api.get(`users/${id}`)
        setUser(response.data)
        setTechs(response.data.techs)
    }*/

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('@kenziehub:id'))
        loadUser(id)
        loadTechs(id)
    }, [user])

    const exit = () => {
        localStorage.clear()
        setAuthenticaded(false)
        return history.push('/')
    }

    if(!authenticaded){
        return <Redirect to='/'/>
    }

    return (
        <>
            <Navbar>
                <h1>Kenzie hub</h1>
                <Button onClick={exit}>Sair</Button>
            </Navbar>
            <Header>
                <h2>{user.name && `Olá, ${user.name}`}</h2>
                <span>{user.course_module}</span>
            </Header>
            <Main>
                <Cabeçalho>
                    <h3>Tecnologias</h3>
                    <Button onClick={() => setShowModalPost(true)}>+</Button>
                </Cabeçalho>
                
                <TechsContainer>
                    {
                        techs && techs.map((tech) => <Card onClick={() => {
                            setCardTech({title: tech.title, id: tech.id, status: tech.status})
                            setShowModalPut(true)
                            }
                        } 
                        key={tech.id} title={tech.title} status={tech.status} />)
                    }
                </TechsContainer>            
            </Main>
            {
                    showModalPost && <ModalPost setShowModalPost={setShowModalPost}/>
                }
                {
                    showModalPut && <ModalPut cardTech={cardTech} setShowModalPut={setShowModalPut }/>
                }
        </>
    )
}

export default Dashboard 