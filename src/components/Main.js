//require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/ca/umanitoba/Robg.css');


import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'
import About from '../components/ca/umanitoba/about';
import Comp1012 from '../components/ca/umanitoba/comp1012';
import Comp1020 from '../components/ca/umanitoba/comp1020';
import Comp3430 from '../components/ca/umanitoba/comp3430';
import Comp2140 from '../components/ca/umanitoba/comp2140';
import Comp3380 from '../components/ca/umanitoba/comp3380';

let meImage = require('../images/me_square.png');

class LeftMenu extends Component {

  state = {};

  static propTypes = {
    change_callback: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }


  handleItemClick (e, { name } ) {
    this.props.change_callback(name);
    this.setState({ activeItem: name });
    
  }

  render() {
    const { activeItem } = this.state

    var topImageStyle = {
      display: 'inline-block',
      width: 150,
      height: 150,
      borderRadius: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      background: 'url(' + meImage + ')'
    }


    return (
      <Menu fixed="left" vertical={true} >
        <Menu.Item
          name='About Rob'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <div style={topImageStyle}>
          
          </div>
        </Menu.Item>
        <Menu.Header>
          Current courses
        </Menu.Header>
        <Menu.Item
          name='COMP 1020'
          active={activeItem === '1020_2018'}
          onClick={this.handleItemClick}
        >
         COMP 1020
        </Menu.Item>
        <Menu.Item
          name='COMP 3430'
          active={activeItem === '3430_2018'}
          onClick={this.handleItemClick}
        >
         COMP 3430
        </Menu.Item>

        <Menu.Header>
          Previous courses
        </Menu.Header>
        <Menu.Item
          name='COMP 1012'
          active={activeItem === '1012_2018'}
          onClick={this.handleItemClick}
        >
          COMP 1012
        </Menu.Item>
        <Menu.Item
          name='COMP 2140'
          active={activeItem === '2140_2018'}
          onClick={this.handleItemClick}
        >
          COMP 2140
        </Menu.Item>
        <Menu.Item
          name='COMP 3380'
          active={activeItem === '3380_2018'}
          onClick={this.handleItemClick}
        >
          COMP 3380
        </Menu.Item>

      </Menu>
    )
  }
}




class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showpage: 'about'
    };
    this.menuclick = this.menuclick.bind(this);
  }
  
  menuclick(moveTo) {
    this.setState ({showpage: moveTo});
  }

  render() {
    var page = <About />
    if (this.state.showpage == 'COMP 1020') {
      page = <Comp1020 />
    }
    else if (this.state.showpage == 'COMP 1012') {
      page = <Comp1012 />
    }
    else if (this.state.showpage == 'COMP 3430') {
      page = <Comp3430 />
    }
    else if (this.state.showpage == 'COMP 3380') {
      page = <Comp3380 />
    }
    else if (this.state.showpage == 'COMP 2140') {
      page = <Comp2140 />
    }
    //<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    return (
      <div className="index">
        <LeftMenu change_callback={this.menuclick} />
        
        <div className="content">{page}</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
