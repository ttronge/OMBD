import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route } from 'react-router-dom'
const card = ({ peliculas }) => {
    return (
        <div className="tarjeta">
            {peliculas.length > 0 &&
                peliculas.map(pelicula => {
                    return <div className="card" key={pelicula.imdbID} style={{ width: "18rem" }}>
                        <img src={pelicula.Poster} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='titulos'>
                                <h5 className="card-title">{pelicula.Title}</h5>
                            </div>
                            <Link to={`/movies/${pelicula.Title}`}><button className='btnKing'>SHOW MORE</button> </Link>
                        </div>
                    </div>
                })
            }

        </div >
    )

}
export default card