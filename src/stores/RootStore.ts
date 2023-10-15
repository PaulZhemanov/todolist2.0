import { makeAutoObservable } from "mobx";
import {TaskStore} from "@stores";
export default class RootStore {
  public taskStore: TaskStore;
  constructor(initState?: any) {
    makeAutoObservable(this);
    this.taskStore = new TaskStore(this, initState?.taskStore)
  }

  serialize = () => ({
    taskStore: this.taskStore.serialize()
  });
}
