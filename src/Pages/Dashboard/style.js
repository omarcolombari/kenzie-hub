import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    height: 10vh;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);
    @media screen and (min-width: 768px){
        justify-content: space-around;
    }
    h1 {
        color: var(--color-primary);
        justify-content: space-around;
        margin-left: 15px;
        font-size: 17px;
    }
    button {
        margin-right: 15px;
    }
`

export const Header = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    h2 {
        color: white;
        font-size: 18px;
    }
    span{
        color: var(--grey-1);
        font-size: 13px;
    }
`

export const Main = styled.main`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    h3{
        color: white;
    }
    button {
        font-size: 27px;
        padding: 3px 14px;
    }
`

export const TechsContainer = styled.ul`
    min-width: 300px;
    width: 60vw;
    height: 80%;
    background-color: var(--grey-3);
    border-radius: 10px;
    overflow: auto;
`

export const Cabeçalho = styled.div`
    width: 55vw;
    min-width: 300px;
    display: flex;
    justify-content: space-between;
`