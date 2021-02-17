
import React, { Component }  from 'react';
import Slides from './slides'

let umanImage = require('../../../images/umanitoba.png');

class Comp1020 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 3010 - Winter 2010</h1>
                <p>Teaching COMP 1020, M/W/F 11:30 am - 12:20pm.</p>
            </div>
        );
    }
}


export default Comp1020;
