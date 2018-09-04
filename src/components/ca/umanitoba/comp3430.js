
import React, { Component }  from 'react';

let umanImage = require('../../../images/umanitoba.png');

class Comp3430 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 3430 - Winter 2018</h1>
                <p>Teaching COMP 3430, M/W 10:31 am - 12:00pm.</p>
              <p>Class-specific examples and details will be posted here. ROASS and other material
                  is available at <a href="/~comp3430">the course website.</a></p>
            </div>
        );
    }
}

export default Comp3430;
