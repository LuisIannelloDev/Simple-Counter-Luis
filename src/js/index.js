// import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// import bootstrap and font-awesome
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';


// include your styles into the webpack bundle
import "../styles/index.css";

// function to create the counter component
function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

// Definir proptypes
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}

const rootElement = document.getElementById('app');

const root = ReactDOM.createRoot(rootElement);

let counter = 0;

setInterval(function() {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = counter % 10;
    counter++;

    // render the SimpleCounter component with the updated digits
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 1000);
