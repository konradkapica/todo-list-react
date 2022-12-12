import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState, useEffect } from "react";

const useLocalStorageState = (keyName, initialValue) => {
  const getInitialState = () => {
    const LocalStorageTasks = localStorage.getItem(keyName);
    if (LocalStorageTasks === null) {
      return initialValue;
    }

    return JSON.parse(localStorage.getItem(keyName))
  };

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [keyName, state]);

  return [state, setState];
};

function App() {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);
  const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ])
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <List
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
