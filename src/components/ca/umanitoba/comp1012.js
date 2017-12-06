
import React, { Component }  from 'react';
let umanImage = require('../../../images/umanitoba.png');

class Comp1012 extends Component {
    render() {
        return(
            <div>
                <umanImage />
            <p>The COMP 1012 main page can be found at <a href="http://cs.umanitoba.ca/~comp1012/">http://cs.umanitoba.ca/~comp1012/</a></p>
            </div>
        );
    }
}

export default Comp1012;
