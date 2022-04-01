import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.aside`
    border-radius: 7px;
    width: 369px;
    min-width: 300px;
    height: 300px;
    position: relative;
    background-color: var(--grey-3);
    form {
        margin: 0 auto;
        width: 90%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input {
            color: #868E96;
        }
    }
`

export const ModalTitle = styled.div`
    border-radius: 7px;
    height: 50px;
    background-color: var(--grey-2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
        color: white;
        font-size: 15px;
    }
    button {
        background-color: transparent;
        font-size: 15px;
        color: var(--grey-1);
    }
`

export const ModalForm = styled.form`
    background-color: var(--grey-3);
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-size: 15px;
        width: 47%;
    }

`