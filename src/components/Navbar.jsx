import React from 'react';
import * as GhibliLogo from '../images/ghiblilogo.jpg';

function Navbar(props) {
    return(
        <div>
            <img id="ghibli-logo" src={GhibliLogo} alt="ghibli-logo" height="210px" width="280px" />
            <button onClick={() => props.loadFilms()}>Load Films</button>
            <button onClick={() => props.loadPeople()}>Load People</button>
        </div>
    )
}

export default Navbar