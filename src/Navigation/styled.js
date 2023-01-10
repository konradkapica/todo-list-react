import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.primaryColor};;
    color: white;
    text-decoration: none;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`;

export const NavigationList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    
    &.active {
        font-weight: 700;
    }

    &:hover {
        text-decoration: underline;
    }
`;