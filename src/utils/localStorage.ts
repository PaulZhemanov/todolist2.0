export const loadState = (): any | undefined => {
  try {
    const state = JSON.parse(localStorage.getItem("todolist-store") as string);
    return state || undefined;
  } catch (error) {
    console.dir(error);
    return undefined;
  }
};
export const saveState = (state: any): void => {
  localStorage.setItem("todolist-store", JSON.stringify(state));
};
