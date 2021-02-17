
import React, { Component }  from 'react';
import Slides from './slides'


let umanImage = require('../../../images/umanitoba.png');

class Comp3430 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 3350 - Winter 2021</h1>
                <p>Teaching COMP 3430, M/W/F 9:30-10:20</p>
              <p>Class-specific examples and details will be posted here. ROASS and other material
                  is available at  <a href="https://universityofmanitoba.desire2learn.com/">UMLearn.</a></p>
            </div>
        );
    }
}

export default Comp3430;
