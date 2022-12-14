import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: white;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #eee;
`;

export const Button = styled.button`
    height: 40px;
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
    background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
        flex-grow: 1;
        align-self: stretch;
    }
`;