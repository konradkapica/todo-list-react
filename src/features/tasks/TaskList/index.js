import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { TasksList, Item, Content, RemoveButton, DoneButton } from "./styled"

const TaskList = () => {
   const { tasks, hideDone } = useSelector(selectTasks);
   const dispatch = useDispatch();

   return (
      <TasksList>
         {tasks.map(({ id, content, done }) => (
            <Item
               key={id}
               hide={done && hideDone}
            >
               <DoneButton
                  onClick={() => dispatch(toggleTaskDone(id))}
               >
                  {done ? "✓" : ""}
               </DoneButton>
               <Content done={done}>
                  {content}
               </Content>
               <RemoveButton
                  onClick={() => dispatch(removeTask(id))}
               >
                  🗑
               </RemoveButton>
            </Item>
         ))}
      </TasksList>
   )
};

export default TaskList;