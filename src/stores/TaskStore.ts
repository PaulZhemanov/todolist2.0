import {makeAutoObservable} from "mobx";
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

export default class TaskStore {
    public readonly rootStore: RootStore;

    public tasks: Array<TTask> = []
    private setTasks = (tasks: Array<TTask>) => this.tasks = tasks
    public addTask = (task: TTask) => this.tasks.push(task)
    public removeTask = (index: number) => this.tasks.splice(index, 1)
    public editTask = (index: number, task: TTask) => this.tasks[index] = task

    constructor(rootStore: RootStore, initState?: any) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
        if (initState?.tasks != null && initState.tasks.length > 0){
            this.setTasks(initState.tasks)
        }
    }

    serialize = () => ({tasks: this.tasks});
}


