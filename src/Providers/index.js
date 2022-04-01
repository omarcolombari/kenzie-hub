import UserProvider from './Users'

const Provider = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}