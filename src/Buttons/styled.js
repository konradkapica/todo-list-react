import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    padding: 21px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.buttonHover};
    }

    &:active {
        color: ${({ theme }) => theme.colors.buttonActive};
    }

    &:disabled {
        color: #ccc;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        justify-content: center;
        padding-top: 0px;
    }
`;