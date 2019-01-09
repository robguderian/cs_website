
import React, { Component }  from 'react';
import Slides from './slides'


let umanImage = require('../../../images/umanitoba.png');

class Comp3430 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 3430 - Winter 2019</h1>
                <p>Teaching COMP 3430, M/W/F 3:30-4:20</p>
              <p>Class-specific examples and details will be posted here. ROASS and other material
                  is available at <a href="/~comp3430">the course website.</a></p>
                  <p>Examples <a href="./3430/examples">can be found here</a>.</p>
                 <Slides folderName="3430" />
            </div>
        );
    }
}

export default Comp3430;
