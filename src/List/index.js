import { TasksList, Item, Content, Button } from "./styled"

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <TasksList>
      {tasks.map(({ id, content, done }) => (
         <Item
            key={id}
            hide={done && hideDone}
         >
            <Button
               done
               onClick={() => toggleTaskDone(id)}
            >
               {done ? "✓" : ""}
            </Button>
            <Content done={done}>
               {content}
            </Content>
            <Button
               remove
               onClick={() => removeTask(id)}
            >
               🗑
            </Button>
         </Item>
      ))}
   </TasksList>
);

export default List;