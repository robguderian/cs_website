
import React, { Component }  from 'react';
let umanImage = require('../../../images/umanitoba.png');

class Comp1020 extends Component {
    render() {
        return(
            <div>
                <umanImage />
            <p>Teaching COMP 1020, M/W/F 2:30 pm - 3:20pm. Attendance is optional, but highly suggested.</p>
            <p>Class-specific examples and details will be posted here.</p>
            </div>
        );
    }
}

export default Comp1020;
