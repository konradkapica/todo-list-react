import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectTasks, 
    toggleHideDone, 
    setAllDone, 
    selectIsEveryTaskDone, 
    selectIsTasksListEmpty 
} from "../tasksSlice";
import { Container, Button } from "./styled";

const Buttons = () => {
    const { hideDone } = useSelector(selectTasks);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isTasksListEmpty = useSelector(selectIsTasksListEmpty);
    const dispatch = useDispatch();

    return (
        <Container>
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