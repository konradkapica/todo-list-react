import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    background-color: white;
    margin: 0;
    padding: 20px;
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

    ${({ done }) => done && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 35%);
        }
    `};

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 44%);

        &:hover {
            background-color: hsl(0, 100%, 46%);
        }

        &:active {
            background-color: hsl(0, 100%, 50%);
        }
    `};
`;