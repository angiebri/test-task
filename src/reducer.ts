import {Task, TaskStatus} from "./types/Task";
import {AnyAction} from "redux";
import {addAction, changeTaskStateAction, invertAction, removeAction} from "./actions";

type TasksState = {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: []
}

export function tasksReducer(state: TasksState = initialState, action: AnyAction): TasksState {
    if (addAction.match(action)) {
        const newTask = {id: Date.now(), name: action.payload, status: TaskStatus.IN_PROGRESS}
        state = {...state, tasks: [...state.tasks, newTask]}
    return state;
    } else if (removeAction.match(action)) {
        return {...state, tasks: [...state.tasks.filter((v: Task) => v.id !== action.payload)]};
    } else if (changeTaskStateAction.match(action)) {
        const newTasks = [...state.tasks]
        const updatedTask = newTasks.findIndex(task => task.id == action.payload.taskId)
        newTasks[updatedTask] = ((action.payload.status == TaskStatus.IN_PROGRESS)) ? {...newTasks[updatedTask], status: TaskStatus.DONE } : {...newTasks[updatedTask], status: TaskStatus.IN_PROGRESS }
        return {...state, tasks: newTasks};
    } else if (invertAction.match(action)) {
        const invertTasks = [...state.tasks]
        invertTasks.reverse()
        return {...state, tasks: invertTasks};
    } else {
        return state;
    }
}