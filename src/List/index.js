import "./style.css";

const List = ({tasks, hideDoneTasks}) => (
   <ul className="list">
      {tasks.map(({id, content, done}) => (
         <li
            key={id}
            className={`list__item${hideDoneTasks && done ? "list__item--hide" : ""}`}
         >
            <button className="list__button list__button--done">
               {done ? "✓" : ""}
            </button>
            <p className={`${done ? " list__item--done" : ""}`}>
               {content}
            </p>
            <button className="list__button list__button--remove">🗑</button>
         </li>
      ))}
   </ul>
);

export default List;