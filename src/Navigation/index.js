import { toAuthor, toTasks } from "../routes";
import { NavigationList, StyledNavigation, StyledNavLink } from "./styled";

function Navigation() {
    return (
        <StyledNavigation>
        <NavigationList>
            <li>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </li>
        </NavigationList>
    </StyledNavigation>
    );
};

export default Navigation;