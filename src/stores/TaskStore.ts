import { makeAutoObservable } from "mobx";
import RootStore from "@stores/RootStore";

export enum TASK_STATUS {
    ACTIVE,
    FINISHED
}

export type TTask = {
    title: string,
    description: string,
    status: TASK_STATUS
}

export type TTodolist = {
    todolistTitle: string,
    tasks: TTask
}

export default class TaskStore {
    public readonly rootStore: RootStore;

    public tasks: Array<TTask> = []
    private setTasks = (tasks: Array<TTask>) => this.tasks = tasks
    public addTask = (task: TTask) => this.tasks.push(task)
    public removeTask = (index: number) => this.tasks.splice(index, 1)
    public editTask = (index: number, task: TTask) => this.tasks[index] = task

    public todolists: Array<TTodolist> = []
    private setTodolists = (todolists: Array<TTodolist>) => this.todolists = todolists
    public addTodolist = (todolist: TTodolist) => this.todolists.push(todolist)
    public removeTodolist = (index: number) => this.todolists.splice(index, 1)
    public editTodolist = (index: number, todolist: TTodolist) => this.todolists[index] = todolist

    constructor(rootStore: RootStore, initState?: any) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
        if (initState?.tasks != null && initState.tasks.length > 0) {
            this.setTasks(initState.tasks)
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


