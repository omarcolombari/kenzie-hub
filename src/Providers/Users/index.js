import api from '../../Services'
import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const loadUser = (id) => {
        api.get(`users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider value={{loadUser, user}}>
            {children}
        </UserContext.Provider>
    )
}