import React, { Component }  from 'react';
import PropTypes from 'prop-types';


class Slides extends Component {

    static propTypes = {
        folderName: PropTypes.string.isRequired
    }
      
    constructor(props) {
        super(props);
        this.state = {
          links: []
        };
      }
      

    componentWillMount() {
        // fetch the file list
        // hard-coded because react's default dev environment doesn't
        // like static files. TODO- fix this.
        fetch('./' + this.props.folderName + '/links.json')
        .then(res => res.json())
        .then(function(linkJson) {
            if (linkJson.links) {
                this.setState({links:linkJson.links});
            }
        }.bind(this))
    }
    

    render() {

        var linksToSlides = this.state.links.map(x => <li key={x}><a href={x}>{x}</a></li>)

        return(
            <div>
                <p>Notes available</p>
                <ul>{linksToSlides}</ul>
            </div>
        );
    }
}

export default Slides;
