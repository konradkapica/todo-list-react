import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <ul className="list">
      {tasks.map(({ id, content, done }) => (
         <li
            key={id}
            className={`list__item ${hideDone && done ? "list__item--hide" : ""}`}
         >
            <button
               className="list__button list__button--done"
               onClick={() => toggleTaskDone(id)}
            >
               {done ? "✓" : ""}
            </button>
            <p className={`${done ? " list__item--done" : ""}`}>
               {content}
            </p>
            <button
               className="list__button list__button--remove"
               onClick={() => removeTask(id)}
            >
               🗑
            </button>
         </li>
      ))}
   </ul>
);

export default List;