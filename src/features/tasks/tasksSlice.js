import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loadingExampleTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: toggleDone }) => {
            const index = tasks.findIndex(task => task.id === toggleDone);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: remove }) => {
            const index = tasks.findIndex(({ id }) => id === remove);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        fetchExampleTasks: (state) => {
            state.loadingExampleTasks = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loadingExampleTasks = false;
        },
        loadingExampleTasksError: (state) => {
            state.loadingExampleTasks = false;
        }
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    loadingExampleTasksError
} = tasksSlice.actions;

const selectTaskState = state => state.tasks;

export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectLoadingExampleTasks = state => selectTaskState(state).loadingExampleTasks;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsTasksListEmpty = state => selectTasks(state).length > 0;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;