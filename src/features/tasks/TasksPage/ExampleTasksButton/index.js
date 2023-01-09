import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Button, Container } from "../Buttons/styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Container>
    )
};

export default ExampleTasksButton;