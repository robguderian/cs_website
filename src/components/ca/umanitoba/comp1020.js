
import React, { Component }  from 'react';
let umanImage = require('../../../images/umanitoba.png');

class Comp1020 extends Component {
    render() {
        return(
            <div>
                <umanImage />
            <p>Teaching COMP 1020, M/W/F 2:30 pm - 3:20pm. Attendance is optional,
                but 10% of your grade is based on in-class testing done via
                iClicker. These pop-quizes will be in most classes.</p>
            <p>Class-specific examples and details will be posted here.</p>
            </div>
        );
    }
}

export default Comp1020;
