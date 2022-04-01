import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ primary }) => primary ? 'var(--color-primary)' : 'var(--grey-1)' };
    :hover {
        background: ${({ primary }) => primary ? 'var(--color-primary-focus)' : 'var(--grey-2)' };
    }
    border: none;
    color: white;
    width: 100%;
    height: 40px;
`
