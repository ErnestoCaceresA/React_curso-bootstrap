import React from 'react'

// imagenes
import logo from '../../img/logo.jpg'

export default function AnimalCrossing() {
    return (
        <div className="AnimalCrossing">
        
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="200px" />
                </a>

                <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toogle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Summer Pack</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Sign in</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* CARROUSEL */}

        {/* RIBBON */}

        {/* SEPARADOR RIBBON */}

        {/* SEPARADOR AMMIBOS */}

        {/* AMIIBOS */}

        {/* FOOTER */}
        </div>
    )
}
