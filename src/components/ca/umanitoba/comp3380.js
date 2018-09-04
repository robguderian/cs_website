
import React, { Component }  from 'react';

let umanImage = require('../../../images/umanitoba.png');

class COMP3380 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 3380 - Fall 2018</h1>
                <p>Teaching COMP 3380, T/Th 8:30 am - 9:45am.</p>
                <p>Class-specific examples and details will be posted here. ROASS and other material
                      is available at <a href="https://universityofmanitoba.desire2learn.com/">UMLearn.</a></p>
                <p>Examples <a href="./3380/examples">can be found here</a>.</p>
            </div>
        );
    }
}

export default COMP3380;
