import { makeAutoObservable } from "mobx";
import RootStore from "@stores/RootStore";

export enum TASK_STATUS {
    ACTIVE,
    FINISHED
}

export type TTask = {
    taskTitle: string,
    description: string,
    status: TASK_STATUS
}

export type TTodolist = {
    todolistTitle: string,
    tasks: Array<TTask>
}

export default class TaskStore {
    public readonly rootStore: RootStore;

    public tasks: Array<TTask> = []
    public setTasks = (tasks: Array<TTask>, indexTodolist: number) => this.tasks = tasks
    public addTask = (task: TTask, indexTodolist: number) => {
        if (indexTodolist >= 0 && indexTodolist < this.todolists.length) {
            this.todolists[indexTodolist].tasks.push(task);
        }
    }
    public removeTask = (indexTask: number, indexTodolist: number) => {
        if (indexTodolist >= 0 && indexTodolist < this.todolists.length) {
            const tasks = this.todolists[indexTodolist].tasks;
            if (indexTask >= 0 && indexTask < tasks.length) {
                tasks.splice(indexTask, 1);
            }
        }
    }
    public editTask = (indexTask: number, task: TTask, indexTodolist: number) => {
        if (indexTodolist >= 0 && indexTodolist < this.todolists.length) {
            const tasks = this.todolists[indexTodolist].tasks;
            if (indexTask >= 0 && indexTask < tasks.length) {
                tasks[indexTask] = task;
            }
        }
    }
    public todolists: Array<TTodolist> = []
    public setTodolists = (todolists: Array<TTodolist>) => this.todolists = todolists
    public addTodolist = (todolist: TTodolist) => this.todolists.push(todolist)
    public removeTodolist = (indexTodolist: number) => this.todolists.splice(indexTodolist, 1)
    public editTodolist = (indexTodolist: number, todolist: TTodolist) => this.todolists[indexTodolist] = todolist

    constructor(rootStore: RootStore, initState?: any, indexTodolist?: number) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
        if (initState?.tasks != null && initState.tasks.length > 0) {
            if (indexTodolist != null && indexTodolist >= 0 && indexTodolist < this.todolists.length) {
                this.todolists[indexTodolist].tasks = initState.tasks;
            }
        }
        if (initState?.todolists != null && initState.todolists.length > 0) {
            this.setTodolists(initState.todolists)
        }
    }


    serialize = () => ({
        tasks: this.tasks,
        todolists: this.todolists
    });
}


