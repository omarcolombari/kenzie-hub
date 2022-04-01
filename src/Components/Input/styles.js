import styled from "styled-components";

export const Container = styled.div`
    color: ${({error}) => error ? 'var(--negative)' : 'white'};
    width: 100%;
    div {
        label{
            font-size: 12px;
            margin-bottom: 22px;
        }
    }
`
export const ContainerInput = styled.div`
    width: 100%;
    height: 35px;
    background-color: var(--grey-2);
    display: flex;
    border-radius: 5px;
    :hover{
        border: 2px solid white;
    }
    ${({error}) => error && 'border: 1px solid var(--negative)'};
    input{
        background-color: transparent;
        border: none;
        text-align: start;
        width: 80%;
        margin: 0 auto;
        color: white;
        ::placeholder{
            color: var(--grey-1);
        }
        
    }
    .icon {
        position: relative;
        top: 10px;
        right: 15px;
    }

`

export const Error = styled.p`
    margin-top: 3px;
    font-size: 0.7rem;
`