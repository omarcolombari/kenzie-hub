import { Container, ContainerInput } from "./styles"

function InputSelect({ value, name, label, register, options }){
    return(
        <Container>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <ContainerInput>
                <select {...register(name)} value={value && value} id={name}>
                    {
                        options.map((option,index) => <option key={index} value={option}>{option}</option>)
                    }
                </select>

            </ContainerInput>
        </Container>
    )
}

export default InputSelect