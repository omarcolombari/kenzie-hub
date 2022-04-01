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

export const ContainerForm = styled.div`
    background-color: var(--grey-3);
    border-radius: 5px;
    width: 300px;
    height: 60%;
    margin-top: 10px;
    form {
        height: 90%;
        width: 85%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        justify-content: space-around;
        span {
            font-size: 12px;
            color: var(--grey-1);
        }
    }
`