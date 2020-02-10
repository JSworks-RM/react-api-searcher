import React, {Component} from 'react'
import Imagen from './Imagen'

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes
        if ( imagenes.length === 0 ) return null
        console.log(imagenes)

        return (
            <React.Fragment>
                <div className="row col-12 p-5">
                    {imagenes.map(img => (
                        <Imagen 
                            key={img.id}
                            imagen={img}
                        />
                    ) )}
                </div>
            </React.Fragment>
        )
    }

    render () {
        return (
            <>
                {this.mostrarImagenes()}
            </>
        )
    }
}

export default Resultado