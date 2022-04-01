import { Container, ContainerInput, Error } from "./styles"

function Input({ name, icon: Icon, type, label, placeholder, register, ...rest }){
    const { value, error, showPassword, setShowPassword } = {...rest}
    return(
        <Container error={!!error}>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <ContainerInput error={!!error}>
                <input value={value && value}type={type} {...register(name)} placeholder={placeholder} id={name}/>
                {
                    Icon && <Icon className='icon' cursor='pointer' 
                    onClick={() => setShowPassword(!showPassword)}
                    />
                }
            </ContainerInput>
            {
                !!error && <Error>{error}</Error>
            }
        </Container>
    )
}

export default Input