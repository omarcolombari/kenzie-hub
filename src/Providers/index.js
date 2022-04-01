import { TechsProvider } from './Techs'
import { UserProvider } from './Users'

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <TechsProvider>
                {children}
            </TechsProvider>
        </UserProvider>
    )
}

export default Providers