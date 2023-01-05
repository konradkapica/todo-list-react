import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { TasksList, Item, Content, RemoveButton, DoneButton } from "./styled"

const TaskList = ({ removeTask, toggleTaskDone }) => {
   const { tasks, hideDone } = useSelector(selectTasks);

   return (
      <TasksList>
         {tasks.map(({ id, content, done }) => (
            <Item
               key={id}
               hide={done && hideDone}
            >
               <DoneButton
                  onClick={() => toggleTaskDone(id)}
               >
                  {done ? "✓" : ""}
               </DoneButton>
               <Content done={done}>
                  {content}
               </Content>
               <RemoveButton
                  onClick={() => removeTask(id)}
               >
                  🗑
               </RemoveButton>
            </Item>
         ))}
      </TasksList>
   )
};

export default TaskList;