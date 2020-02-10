import React, {Component} from 'react'
import Buscador from './Components/Buscador'
import Resultado from './Components/Resultado'

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  // Métodos de la paginación
  paginaAnterior = () => {
    // Leer el state de la página actual
    let paginaActual = this.state.pagina

    // Si página actual es 1, no hacer nada
    if ( paginaActual === 1 ) return null

    // Restar uno a la página actual
    paginaActual--

    // Agregar el cambio al state
    this.setState({
      pagina : paginaActual
    },  () => {
          this.consultarApi()
          this.scroll()
        })

    // Opcional para mirar resultados en consola
    //console.log('Página aatras: ', paginaActual)
  }

  paginaSiguiente = () => {
    // Leer el state de la página actual
    let paginaActual = this.state.pagina

    // Sumar uno a la página actual
    paginaActual++

    // Agregar el cambio al state
    this.setState({
      pagina : paginaActual
    }, () => {
          this.consultarApi()
          this.scroll()
        })

    // Opcional para mirar resultados en consola
    //console.log('Página actual: ', paginaActual)
  }

  // Metodo scroll para que nos posicione en donde queramos cada vez que pasemos a otra página de la paginación
  scroll = () => {
    const element = document.querySelector('#scroll')
        element.scrollIntoView('smooth', 'start')
  }

  // Método de consulta a la API de Pixabay
  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina
    const url =  `https://pixabay.com/api/?key=15198671-a5671ba9cd5bcc6a0977e9d70&q=${termino}&page=${pagina}`
    // console.log(url)

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => this.setState({imagenes : resultado.hits}) )
  }

  // Método que recibe datos de la búsqueda y llamada a función consultarApi()
  datosBusqueda = termino => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi()
    })
  }

  render () {
    return (
      <div className="app container">
          <div className="jumbotron" id="scroll">
            <p className="lead text-center">Buscador de imágenes</p>
            <Buscador 
              datosBusqueda={this.datosBusqueda}
            />
            <div className="row justify-content-center">
              <Resultado 
                imagenes={this.state.imagenes}
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
              />
            </div>
          </div>
      </div>
    )
  }
}

export default App;
