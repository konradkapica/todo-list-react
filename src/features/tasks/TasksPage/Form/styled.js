import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: white;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Button = styled.button`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    padding: 10px;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonHover};
        transform: scale(1.1);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.buttonActive};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-grow: 1;
        align-self: stretch;
    }
`;