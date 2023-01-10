import styled, { css } from "styled-components";
import { Link } from "react-router-dom"

export const TasksList = styled.ul`
    list-style: none;
    background-color: white;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    border-bottom: 1px solid rgb(211, 211, 211);
    padding: 0 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    
    ${({ hide }) => hide && css`
        display: none;
    `}
`;

export const Content = styled.p`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.buttonHover};
    }

    &:active {
        color: ${({ theme }) => theme.colors.buttonActive};
    }
`;

export const Button = styled.button`
    color: white;
    height: 30px;
    width: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: 0.3s;
    cursor: pointer;
`;

export const DoneButton = styled(Button)`
    background-color: green;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }

    &:active {
        background-color: hsl(120, 100%, 35%);
    }
`;


export const RemoveButton = styled(Button)`
    background-color: hsl(0, 100%, 44%);

     &:hover {
        background-color: hsl(0, 100%, 46%);
    }

    &:active {
        background-color: hsl(0, 100%, 50%);
    }
`;