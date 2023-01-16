import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { toTask } from "../../../../routes";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { TasksList, Item, Content, RemoveButton, DoneButton, StyledLink } from "./styled"


const TaskList = () => {
   const location = useLocation();
   const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

   const tasks = useSelector(state => selectTasksByQuery(state, query));
   const hideDone = useSelector(selectHideDone);

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
                  <StyledLink to={toTask({id: id})}>{content}</StyledLink>
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