import React from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../components/NavBar';
import Card from '../components/Card'
import SinglermovieContainer from './SinglermovieContainer'
import { Route } from 'react-router-dom'

const api = 'https://www.omdbapi.com/?apikey=20dac387'

class Main extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            pelis: [],
            inputValue: '',
            peliUnica: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`${api}&s=movie`)
            .then(res => res.data.Search)
            .then((peli) => {
                console.log(peli)
                return peli
            })
            .then((peliculas) => this.setState({
                pelis: peliculas
            }))
    }
    handleChange(evt) {

        const value = evt.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        axios.get(`${api}&s=${this.state.inputValue}`)
            .then(res => res.data.Search)
            .then((peliculas) => this.setState({
                pelis: peliculas
            }))

    }

    render() {
        const { pelis } = this.state
        return (
            <div>
                <NavBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <Card peliculas={pelis} />

            </div >
        )


    }
}
export default Main