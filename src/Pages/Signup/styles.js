import styled from "styled-components";

export const Title = styled.h1`
    color: var(--color-primary);
    font-size: 1.7rem;
`

export const Container = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        color: white;
        font-size: var(--title-1);
    }
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`

export const ContainerForm = styled.div`
    background-color: var(--grey-3);
    border-radius: 5px;
    width: 300px;
    height: 91%;
    margin-top: 10px;
    form {
        height: 100%;
        width: 85%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        justify-content: space-evenly;
        span {
            font-size: 12px;
            color: var(--grey-1);
        }
    button {
        background-color: ${({error}) => error.length !== 0 && 'var(--color-primary-negative)'};
    }
    }
`