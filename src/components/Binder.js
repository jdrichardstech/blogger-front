import React, { Component } from 'react';

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      somethingText: 'doSomething',
    };
    // this.onClickMe = this.onClickMe.bind(this);
  }

  handleDoSomething = (text) => {
    console.log(text);
  };
  onClickMe = () => {
    console.group(this);
    console.log('inside function....', this.state.text);
    this.setState({ text: 'The button was clicked' });
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button
          onClick={this.onClickMe}
          className="ui primary button"
          style={{ margin: '10px 15px' }}
        >
          Click Me
        </button>
        <button
          onClick={this.handleDoSomething(this.state.somethingText)}
          class="ui secondary button"
          style={{ margin: '10px 15px' }}
        >
          Do Something
        </button>
      </div>
    );
  }
}

export default Binder;
