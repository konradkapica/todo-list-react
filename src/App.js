import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route>
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;