import React from 'react'
// Lo guardamos en una constante porque no se va a modificar mucho
const Encabezado = (props) =>  {

    return(
        <h1 style = {{color: props.color}}>{props.titulo}</h1>
    );
}

export default Encabezado