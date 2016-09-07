
require('normalize.css/normalize.css');
require('styles/App.css');
require('../actions/list/listStore');


import React from 'react';
import Reminder from './Reminder';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div>{this.props.text}</div>
        <Reminder data={{text:'333333'}}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  text: 'Hello React1'
};

export default AppComponent;
