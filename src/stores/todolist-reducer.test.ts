import {
    AddTodolistAC,
    EditTodolistAC,
    RemoveTodolistAC, todolistsReducer,
} from "@stores/todolist-reducer";
import {TTodolist} from "@stores/TaskStore";

test('correct todolist should be removed', () => {

    let todolistId1 = Math.random()
    let todolistId2 = Math.random()

    const startState: Array<TTodolist> = [
        {id: todolistId1, title: 'todolist1'},
        {id: todolistId2, title: 'todolist2'}
    ]

    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)

})

// =======================================================================================

test('correct todolist should be added', () => {

    let todolistId1 = Math.random()
    let todolistId2 = Math.random()
    let newTodolistTitle = 'new todolist'

    const startState: Array<TTodolist> = [
        {id: todolistId1, title: 'todolist1'},
        {id: todolistId2, title: 'todolist2'}
    ]

    const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistTitle)

})

// =======================================================================================

test('correct todolist should change its name', () => {

    let todolistId1 = Math.random()
    let todolistId2 = Math.random()
    let newTodolistTitle = 'new todolist'

    const startState: Array<TTodolist> = [
        {id: todolistId1, title: 'todolist1'},
        {id: todolistId2, title: 'todolist2'}
    ]


    const endState = todolistsReducer(startState, EditTodolistAC(todolistId2, newTodolistTitle))

    expect(endState[0].title).toBe('todolist1')
    expect(endState[1].title).toBe(newTodolistTitle)

})
