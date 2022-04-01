import styled from "styled-components";

export const Container = styled.div`
    color: white;
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
    select{
        background-color: transparent;
        border: none;
        width: 90%;
        margin: 0 auto;
        color: white;
        option {
            background-color: var(--grey-2);
        }
    }

`