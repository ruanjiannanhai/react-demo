/**
 * Created by lilei on 16-8-16.
 */
import React from 'react';
import ShowText from './showText';
class ReminderComponent extends React.Component {
  render(){
    return (
      <div>
        {this.props.data.text}
        <ShowText data={{text:'444444'}} />
      </div>
    )
  }
}


export default ReminderComponent
