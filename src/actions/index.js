let nextToDoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text,
});