// import { createSlice, nanoid } from "@reduxjs/toolkit";

// //nanoid --> it generates the unique ids

// //the below function is the initial state of the store which contains objects
// const initialState = {
//   todos: [{ id: 1, test: "Hello world" }],
// };

// //now we have to create a slice, that is basically the bigger version of the reducers and the reducers is a functionality

// export const todoSlice = createSlice({
//   name: "todo", // name is the property that is already builtin.
//   initialState, //w have to specify the initialState here
//   //this is the reducers which contains the functions but these functions are diffreenvt from context api in a way that , in context api we were just declariung the function, but here we are defining the function definition as well which contains
//   //the two things state and actions as given below
//   //state provide the state means what is currently in the state is handle by state, means that if the initial state the array of todo is empty or it has 10 todo list in the array etc
//   //action provides the data /values like id name etc for the functions
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload // payload is an object here so it will be providing the text
//       };
//       //the above todo is creating a todo now its time to pass this todo in the state
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions; //again exporting it because we have to export each reducer function in the store.js

// export default todoSlice.reducer; // store.js only update those reducers which is basically registered there  otherwise it is not gonna make changs in the reducer that is not export and then import in the store.js

// // these are basically the syntax.

//the above code contains some errors but overall the description of the redux

//to run this application you need to uncommit the below given code
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
