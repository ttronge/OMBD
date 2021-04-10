import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ handleChange, handleSubmit }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">OMBD</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to={'/loggin'} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Loggin</Link>
                        {/* <div className="dropdown-menu">
                            <a className="dropdown-item" >Login</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated linkL</a>
                        </div> */}
                    </li>
                </ul>
                <div className="buscador" onSubmit={handleSubmit}>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={handleChange} />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        <Link to={''}> <button className="btn btn-secondary my-2 my-sm-0" >Login</button></Link>
                        <Link to={'/register'}><button className="btn btn-secondary my-2 my-sm-0">Register</button></Link>

                    </form>
                </div>

            </div>
        </nav>
    )
}
export default NavBar