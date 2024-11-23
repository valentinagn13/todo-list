import "./TodoCounter.css";
export default function TodoCounter({ total, completed }) {
    //Lógica JavaScript

    //Estructura Html
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span>{" "}
            TODOs
        </h1>
    );
}

//export{TodoCounter};
