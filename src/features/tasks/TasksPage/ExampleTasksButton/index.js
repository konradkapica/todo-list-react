import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoadingExampleTasks } from "../../tasksSlice";
import { Button, Container } from "../Buttons/styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoadingExampleTasks);

    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Container>
    )
};

export default ExampleTasksButton;