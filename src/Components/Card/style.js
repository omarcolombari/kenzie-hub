import styled from "styled-components";

export const CardTech = styled.li`
    border-radius: 10px;
    padding: 10px 0px;
    background-color: var(--grey-4);
    color: white;
    list-style: none;
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    p {
        margin-left: 15px;
    }
    span{
        margin-right: 15px;
        color: var(--grey-1);
    }
    :hover {
        cursor: pointer;
        background-color: var(--grey-2);
    }
`