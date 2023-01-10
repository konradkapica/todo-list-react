import { NavigationList, StyledNavigation, StyledNavLink } from "./styled";

function Navigation() {
    return (
        <StyledNavigation>
        <NavigationList>
            <li>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </li>
        </NavigationList>
    </StyledNavigation>
    );
};

export default Navigation;