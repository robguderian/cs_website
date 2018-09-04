
import React, { Component }  from 'react';
import Slides from './slides'
let umanImage = require('../../../images/umanitoba.png');

class Comp2140 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 2140 - Fall 2018</h1>
                <p>The COMP 2140 main page can be found at <a href="https://universityofmanitoba.desire2learn.com/">UMLearn.</a></p>
                <p>Examples <a href="./2140/examples">can be found here</a>.</p>
                 <Slides folderName="2140" />
            </div>
        );
    }
}

export default Comp2140;
