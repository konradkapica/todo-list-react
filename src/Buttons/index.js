import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {!!tasks.length && (
            <React.Fragment>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;