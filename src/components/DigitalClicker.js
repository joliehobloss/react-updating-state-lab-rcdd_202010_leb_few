// Code DigitalClicker Component Here
import React from 'react';
class DigitalClicker extends React.Component {
<<<<<<< HEAD
   constructor() {
    super();
    
    this.state = {
     timesClicked:0
    };
  }

    
  handleClick = () => {
  this.setState({
    timesClicked:this.state.timesClicked + 1
=======
 
 this.state = {
      timesClicked=0
    };
    
  handleClick = () => {
  this.setState({
    timesClicked+=1
>>>>>>> 71ace8bac1ad15910e6e23ea3ec7afc6dd62a901
  })
  };
    
  render() {
    return (
    <div>
    <label for="">Times click</label>
<<<<<<< HEAD
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
=======
    <button onClick={this.handleClick}>click</button>
>>>>>>> 71ace8bac1ad15910e6e23ea3ec7afc6dd62a901
    </div>
    );
  }
}
<<<<<<< HEAD
export default DigitalClicker;


=======
>>>>>>> 71ace8bac1ad15910e6e23ea3ec7afc6dd62a901


