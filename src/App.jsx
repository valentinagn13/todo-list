import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
function App() {
    return (
        <>
            <div className='App'>
                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </TodoList>
            </div>
        </>
    );
}

export default App;
