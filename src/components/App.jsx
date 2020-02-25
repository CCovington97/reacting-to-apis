import React, { Component } from 'react';
// import * as GhibliLogo from '../images/ghiblilogo'
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            isLoaded: false
        }
    }

    // Phase One
    // componentDidMount() {
    //     fetch("https://ghibliapi.herokuapp.com/films")
    //         .then(res => res.json())
    //         .then(films => this.setState({ films: films }))
    //         .then(film => console.log(this.state.films))
    //         .catch(err => console.log(err))
    // }

    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({
                films: films,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    // Phase One
    // render() {
    //     return this.state.films.map(film => {
    //         return (
    //             <div key={film.id}>
    //                 <h1>{film.title}</h1>
    //                 <p>{film.description}</p>
    //             </div>
    //         )
    //     })
    // }

    // Phase Two
    render() {
        if (this.state.isLoaded) {
            return this.state.films.map(film => {
                return (
                    <div key={film.id}>
                        <h1>{film.title}</h1>
                        <p>{film.description}</p>
                    </div>
                )
            })
        } else {
            return <button onClick={() => this.loadFilms()}>Load Films</button>
        }
    }
}

export default App