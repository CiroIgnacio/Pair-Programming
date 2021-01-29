import React, { Component } from 'react';

class Cuerpo extends Component {
  constructor (props){
    super (props);
    this.i = 0;
    this.color = ["cyan", "yellow", "orange"];
    this.state = {
      texto: "texto de prueba",
      color: this.color[0]
    }
  }

  cambiarColor () {
    this.i++;
    if (this.i > 2){
        this.i = 0;
    }
   this.setState({color: this.color[this.i]});
  }

  render() {
    return (
      <div>
        <p style = {{color: this.state.color}}>{this.state.texto}</p>
        <button onClick={ () => { this.cambiarColor () } }>Cambiar Color</button>
      </div>
    )
  }
}

export default Cuerpo;