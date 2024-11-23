//Importar componentes
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/TodoButton/CreateTodoBotton";
// import "./App.css";
import React from "react";

const defaultTodos = [
    { text: "Estudiar JavaScript", completed: true },
    { text: "Estudiar React.js", completed: true },
    { text: "Estudiar Git", completed: false },
    { text: "Hacer un TodoList", completed: false }
];

function App() {
    
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

  console.log("Los usuarios buscan todos de " + searchValue);
  
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
