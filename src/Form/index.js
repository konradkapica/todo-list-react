import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const trimmedNewTaskContent = newTaskContent.trim();

    const inputFocus = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!trimmedNewTaskContent) {
            setNewTaskContent("");
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button
                onClick={inputFocus}
            >
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};

export default Form;