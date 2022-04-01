import { TechProvider } from './Techs'
import { UserProvider } from './Users'

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
    )
}

export default Providers