
import React, { Component }  from 'react';
import Slides from './slides'

let umanImage = require('../../../images/umanitoba.png');

class Comp1020 extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>COMP 1020 - Winter 2018</h1>
                <p>Teaching COMP 1020, M/W/F 2:30 pm - 3:20pm. Attendance is optional,
                but 10% of your grade is based on in-class testing done via
                iClicker. These pop-quizes will be in most classes.</p>
              <p>Class-specific examples and details will be posted here. ROASS and other material
                  is available at <a href="https://universityofmanitoba.desire2learn.com/">UMLearn.</a></p>
              <p>Examples <a href="./1020/examples">can be found here</a>.</p>
              <p>Notes from class:</p>
              <Slides folderName="1020" />
            </div>
        );
    }
}

export default Comp1020;
