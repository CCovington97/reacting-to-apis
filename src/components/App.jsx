import React, { Component } from 'react';
import * as GhibliLogo from '../images/ghiblilogo'
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            loadFilms: false,
            loadPeople: false
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
                loadFilms: true
            }))
            .catch(err => console.log(err))
    }

    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({
                people: people,
                loadPeople: true
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
        if (this.state.loadFilms) {
            return (
                <div>
                    <Navbar loadPeople={this.loadPeople} />
                    {this.state.films.map(film => {
                        return (
                            <div key={film.id}>
                                <h1>{film.title}</h1>
                                <p>{film.description}</p>
                            </div>)
                    })
                    }
                </div>)
        } else if (this.state.loadPeople) {
            return (
                <div>
                    <Navbar loadPeople={this.loadPeople} />
                    {this.state.people.map(people => {
                        return (
                            <div key={people.id}>
                                <h1>{people.name}</h1>
                                <p>{people.age}</p>
                            </div>)
                    })
                    }
                </div>)
        } else {
            return (
                <div>
                    <img id="ghibli-logo" src={GhibliLogo} alt="ghibli-log" />
                    <button onClick={() => this.loadFilms()}>Load Films</button>
                    <button onClick={() => this.loadPeople()}>Load People</button>
                </div>
            )
        }
    }
}

export default App