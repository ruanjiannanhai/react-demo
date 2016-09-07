/**
 * Created by lilei on 16-8-16.
 */
import React from 'react';
class ShowTextComponent extends React.Component {
  render(){
    return (
      <p>
        {this.props.data.text}
      </p>
    )
  }
}


export default ShowTextComponent
