import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January 1, ' + (new Date().getFullYear() + 1),
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">
            Countdown to {this.state.deadline}
        </div>

        <Clock
          deadline = {this.state.deadline}
        />

        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder={"January 1, " + (new Date().getFullYear() + 1)}
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>

      </div>
    )
  }
}

export default App;
