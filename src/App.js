import React,{Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/VlidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component{
state = {
  userInput : ''
}
inputChangedHandler = (event) => {
  this.setState({userInput: event.target.value});
}
deleCharHandler = (index) => {
  const text = this.state.userInput.split('');
  text.splice(index,1);
  const updatedText =text.join('');
  this.setState({userInput:updatedText})
}
  render(){
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent
                char = {ch}
                key={index}
                clicked={()=>this.deleCharHandler(index)} />

    });
    return(
      <div className='App'>
        <h1>Assignment 2</h1>
        <input
          type='text'
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLen = {this.state.userInput.length} />
        {charList}
      </div>
    )
  };
}

export default App;