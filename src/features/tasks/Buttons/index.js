import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectHideDone,
    toggleHideDone,
    setAllDone,
    selectIsEveryTaskDone,
    selectIsTasksListEmpty,
    fetchExampleTasks
} from "../tasksSlice";
import { Container, Button } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isTasksListEmpty = useSelector(selectIsTasksListEmpty);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {isTasksListEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    )
};


export default Buttons;