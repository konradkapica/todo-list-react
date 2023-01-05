import { TasksList, Item, Content, RemoveButton, DoneButton } from "./styled"

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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
);

export default TaskList;