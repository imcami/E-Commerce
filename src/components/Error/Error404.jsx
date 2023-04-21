import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="text-center">
            <h2>Error 404 - Página no encontrada.</h2>
            <p>Uy, llegaste a un mundo desconocido. Mejor regresa al inicio.</p>
            <div className="d-flex justify-content-center">
                <Link to={`/`}> 
                    <button className="btn btn-danger bg-gradient mt-3">Volver al Inicio</button>
                </Link>
            </div>
        </div>
    )
}

export default Error404