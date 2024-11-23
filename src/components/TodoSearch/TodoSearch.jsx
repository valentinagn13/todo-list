import "./TodoSearch.css";
import React from "react";
export default function TodoSearch({ searchValue, setSearchValue }) {

    //Estructura Html
    return (
        <input
            placeholder='Cortar cebolla'
            className='TodoSearch'
            value={searchValue}
            onChange={event => {
                setSearchValue(event.target.value);
            }}
        />
    );
}
