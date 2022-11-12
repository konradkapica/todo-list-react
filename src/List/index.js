import "./style.css";

const List = (props) => (
   <ul className="list">
      {props.tasks.map(task => (
         <li
            key={task.id}
            className={`list__item${props.hideDoneTasks && task.done ? "list__item--hide" : ""}`}
         >
            <button className="list__button list__button--done">
               {task.done ? "✓" : ""}
            </button>
            <p className={`${task.done ? " list__item--done" : ""}`}>
               {task.content}
            </p>
            <button className="list__button list__button--remove">🗑</button>
         </li>
      ))}
   </ul>
);

export default List;