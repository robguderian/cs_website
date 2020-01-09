
import React, { Component }  from 'react';
import { Table } from 'semantic-ui-react'

let umanImage = require('../../../images/umanitoba.png');

class About extends Component {
    render() {
        return(
            <div>
                <img src={umanImage} />
                <h1>About me... </h1>
                <p>Born and raised in Manitoba, I found the love of computer programming in high school.
                I was lucky enough to be in a high school that had a strong computer science diploma
                program, which set me on my path to where I am today.</p>

                <p>I like low-level programming, real-time systems, automation and
                open-source internet-connected tchotchkes.</p>

                <h2>Contact</h2>
                The best ways to get a hold of me, in order:
                <ul>
                    <li>Email: robg@cs.umanitoba.ca or robert.guderian@umanitoba.ca</li>
                    <li>Office: E2-405</li>
                    <li>Phone: 204-474-7163</li>
                </ul>
                

                <h2>Office hours</h2>
                <p>Office hours are times I am guaranteed to be in my office. I am often in my office with the door open
                outside of these hours, and you are welcome to come and see if I am available.</p>
                <p>I am also available outside of the office hours by appointment. Email me, or talk to me in class
                   if you'd like to set up an appointment.</p>
                <Table className="tableBorder">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Monday</Table.HeaderCell>
                        <Table.HeaderCell>Tuesday</Table.HeaderCell>
                        <Table.HeaderCell>Wednesday</Table.HeaderCell>
                        <Table.HeaderCell>Thursday</Table.HeaderCell>
                        <Table.HeaderCell>Friday</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>1:00-2:00 pm</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>1:00-2:00 pm</Table.Cell>
                            <Table.Cell>Open door</Table.Cell>
                            <Table.Cell>1:00-2:00 pm</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <h2>Education</h2>
                <ul>
                    <li>M.Sc. - University of Manitoba 2012</li>
                    <li>B.C.Sc. - University of Manitoba 2008</li>
                </ul>
            </div>
        );
    }
}

export default About;
