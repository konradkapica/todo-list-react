import styled from "styled-components";

export const StyledSection = styled.section`
    box-shadow: 0px 0px 6px -4px #000000;
`;

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 0px;
    padding: 21px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        border: none;
        display: grid;
        grid-column-end: span 2;
    }
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    border-bottom: 2px solid rgb(211, 211, 211);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        padding-bottom: 10px;
    }
`;