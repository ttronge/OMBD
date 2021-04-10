import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const api = 'https://www.omdbapi.com/?apikey=20dac387'

class SinglermovieContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peliUnica: {}
        }
        this.singleMovieMethod = this.singleMovieMethod.bind(this);
    }


    singleMovieMethod(movieTitle) {
        return axios.get(`https://www.omdbapi.com/?apikey=20dac387&t=${movieTitle}`)
            .then((res) => res.data)
            .then((serverMovie) => this.setState({ peliUnica: serverMovie }))
    }
    componentDidMount() {
        this.singleMovieMethod(this.props.movieTitle)
    }

    render() {
        console.log(this.state.peliUnica)
        console.log('entre');
        return (
            <div className="letras">
                <div className="card" >
                    <img src={this.state.peliUnica.Poster} className="foto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Title: {this.state.peliUnica.Title}</h5>
                        <p className="card-text"> Plot: {this.state.peliUnica.Plot}</p>
                        <p className="card-text"> Writer: {this.state.peliUnica.Writer}</p>
                        <p className="card-text"> Year: {this.state.peliUnica.Year}</p>
                        <p className="card-text"> Actors: {this.state.peliUnica.Actors}</p>
                        <Link to={'/home'} className="btn btn-primary-tomi">Back to the menu</Link>

                    </div>
                </div>
            </div >
        )
    }

}



export default SinglermovieContainer

