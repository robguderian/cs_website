
import React, { Component }  from 'react';
import Slides from './slides'
let umanImage = require('../../../images/umanitoba.png');

class Comp1012 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 1012 - Fall 2018</h1>
                <p>The COMP 1012 main page can be found at <a href="https://universityofmanitoba.desire2learn.com/">UMLearn.</a></p>
                <p>Examples <a href="./1012/examples">can be found here</a>.</p>
                 <Slides folderName="1012" />
            </div>
        );
    }
}

export default Comp1012;
