import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <button className="form__button" onClick={inputFocus}>Dodaj zadanie</button>
        </form>
    )
};

export default Form;