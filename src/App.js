import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";

function App() {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/autor">O autorze</StyledNavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;