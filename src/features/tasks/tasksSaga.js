import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, loadingExampleTasksError, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHendler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch(error) {
        yield put(loadingExampleTasksError());
        yield call(alert, "Soreczka! Nie udało się pobrać zadań! 😞");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHendler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};