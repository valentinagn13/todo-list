//Importar componentes
import TodoCounter from "../components/TodoCounter/TodoCounter";
import TodoSearch from "../components/TodoSearch/TodoSearch";
import TodoList from "../components/TodoList/TodoList";
import TodoItem from "../components/TodoItem/TodoItem";
import CreateTodoButton from "../components/TodoButton/CreateTodoBotton";
import "./App.css";
import React from "react";

const defaultTodos = [
    { text: "Estudiar JavaScript", completed: false },
    { text: "Estudiar React.js", completed: false },
    { text: "Estudiar Git", completed: true },
    { text: "Hacer un TodoList", completed: true },
    { text: "Taller de programación", completed: false }
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

    const completeTodo = text => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text == text);
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    };

    const deleteTodo = text => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text == text);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

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
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
