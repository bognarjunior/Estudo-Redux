import React from "react";

class Button extends React.Component {
  
  handleClick = (event) => {
    event.preventDefault();
    this.props.action();
  }

  render() {
    return(
      <button onClick={this.handleClick}> {this.props.title} </button>
    )
  }
}

export default Button;