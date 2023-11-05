import {TTodolist} from "@stores/TaskStore";

export type TRemoveTodolistAction = {
    type: 'REMOVE TODOLIST'
    id: number
}

export type TAddTodolistAction = {
    type: 'ADD TODOLIST'
    title: string
}

export type TEditTodolistAction = {
    type: 'CHANGE TODOLIST TITLE'
    id: number
    title: string
}


type TAction = TRemoveTodolistAction | TAddTodolistAction | TEditTodolistAction


export const todolistsReducer = (state: Array<TTodolist>, action: TAction): Array<TTodolist> => {
    switch (action.type) {

        case 'REMOVE TODOLIST': {
            return state.filter(tl => tl.id !== action.id)
        }

        case 'ADD TODOLIST': {
            return [...state, {
                id: Math.random(),
                title: action.title
            }]
        }

        case 'CHANGE TODOLIST TITLE' : {
            const todolist = state.find(todolist => todolist.id === action.id);
            if (todolist) todolist.title = action.title;
            return [...state]
        }

        default:
            throw new Error(" i dont understand this action type")
    }

}

export const RemoveTodolistAC = (todolistId: number): TRemoveTodolistAction => {
    return {type: 'REMOVE TODOLIST', id: todolistId}
}

export const AddTodolistAC = (title: string): TAddTodolistAction => {
    return {type: 'ADD TODOLIST', title: title}
}

export const EditTodolistAC = (id: number, title: string): TEditTodolistAction => {
    return {type: 'CHANGE TODOLIST TITLE', id: id, title: title}
}
