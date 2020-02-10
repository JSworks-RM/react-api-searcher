import React from 'react'

const Paginacion = props => {
    return (
        <div className="py-3">
            <button type="button" className="btn btn-info mr-1" onClick={props.paginaAnterior}>Anterior &larr;</button>
            <button type="button" className="btn btn-info" onClick={props.paginaSiguiente}>Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion