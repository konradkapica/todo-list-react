import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    padding: 21px;
    color: teal;
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }

    @media (max-width: 767px) {
        justify-content: center;
        padding-top: 0px;
    }
`;