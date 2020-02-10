import React, {Component} from 'react'
import Buscador from './Components/Buscador'
import Resultado from './Components/Resultado'

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino
    const url =  `https://pixabay.com/api/?key=15198671-a5671ba9cd5bcc6a0977e9d70&q=${termino}&&per_page=30`
    // console.log(url)

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => this.setState({imagenes : resultado.hits}) )
  }

  datosBusqueda = termino => {
    this.setState({
      termino
    }, () => {
      this.consultarApi()
    })
  }

  render () {
    return (
      <div className="app container">
          <div className="jumbotron">
            <p className="lead text-center">Buscador de imágenes</p>
            <Buscador 
              datosBusqueda={this.datosBusqueda}
            />
            <Resultado 
              imagenes={this.state.imagenes}
            />
          </div>
      </div>
    )
  }
}

export default App;
