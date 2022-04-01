import { StyledButton } from "./style";

function Button ({ children, primary, type, onClick }) {
    return(
        <StyledButton onClick={onClick} type={type} primary={primary}>{ children }</StyledButton>
    )
}

export default Button