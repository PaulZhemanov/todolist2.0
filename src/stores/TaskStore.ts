import {makeAutoObservable} from "mobx";
import RootStore from "@stores/RootStore";

export enum TASK_STATUS {
    ACTIVE,
    FINISHED
}

export type TTask = {
    taskTitle: string,
    description: string,
    status: TASK_STATUS
    todoListId: number
}

export type TTodolist = {
    id: number,
    title: string,
}

export default class TaskStore {
    public readonly rootStore: RootStore;

    public tasks: Array<TTask> = []
    public setTasks = (tasks: Array<TTask>) => this.tasks = tasks
    public addTask = (task: TTask) => this.tasks.push(task)
    public removeTask = (indexTask: number) => this.tasks.splice(indexTask, 1)

    public editTask = (indexTask: number, task: TTask) => this.tasks[indexTask] = task

    public todolists: Array<TTodolist> = []
    public setTodolists = (todolists: Array<TTodolist>) => this.todolists = todolists
    public addTodolist = (title: string) => this.todolists.push({id: Math.random(), title})
    public removeTodolist = (id: number) => {
        for (let i = this.tasks.length - 1; i >= 0; i--) {
            this.tasks[i].todoListId === id && this.removeTask(i);
        }
        const index = this.todolists.findIndex(todolist => todolist.id === id)
        index !== -1 && this.todolists.splice(index, 1)
    }
    public editTodolist = (id: number, title: string) => {
        const index = this.todolists.findIndex(todolist => todolist.id === id)
        index !== -1 && (this.todolists[index].title = title)
    }


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

