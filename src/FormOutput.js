import React, { Component } from 'react';


class FormOutput extends Component {

  render () {
   
    return (
    <div className="Output-Text"> 
      <p className="echo">Echo:</p>
      <p>{this.props.currentText}</p>
    </div>
	)
  }
}

export default FormOutput;