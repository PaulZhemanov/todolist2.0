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
    private setTasks = (tasks: Array<TTask>) => this.tasks = tasks
    public addTask = (task: TTask) => this.tasks.push(task)
    public removeTask = (indexTask: number) => this.tasks.splice(indexTask, 1)
    public editTask = (indexTask: number, task: TTask) => {
        console.log({indexTask, dfd:task.taskTitle})
        this.tasks[indexTask] = task
    }

    public todolists: Array<TTodolist> = []
    private setTodolists = (todolists: Array<TTodolist>) => this.todolists = todolists
    public addTodolist = (title: string) => {
        const id = Math.random();
        this.todolists.push({ id, title });
        return id;
}
    public removeTodolist = (id: number) => {
        const tasksToRemove = this.tasks.filter(task => task.todoListId === id);
        tasksToRemove.forEach(task => this.removeTask(this.tasks.indexOf(task)));
        this.todolists = this.todolists.filter(todolist => todolist.id !== id);
    }
    public editTodolist = (id: number, title: string) => {
        const todolist = this.todolists.find(todolist => todolist.id === id);
        if (todolist) todolist.title = title;
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

