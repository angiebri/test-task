import {Task} from "./types/Task";
import {AnyAction} from "redux";
import {addAction, invertAction, removeAction} from "./actions";

type TasksState = {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: []
}

export function tasksReducer(state: TasksState = initialState, action: AnyAction): TasksState {
    if (addAction.match(action)) {
        return state;
    } else if (removeAction.match(action)) {
        return state;
    } else if (invertAction.match(action)) {
        return state;
    } else {
        return state;
    }
}