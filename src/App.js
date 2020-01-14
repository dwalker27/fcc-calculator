import React from 'react';
import './App.css';

class TopPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display" align="right">
        {this.props.display === '' ? this.props.store : this.props.display}
      </div>
    );
  }
}

class BottomPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="bottom-panel" class="container-fluid">
        <div class="row">
          <button id="clear" class="col-sm-6" onClick={this.props.handleButton}>C</button>
          <button id="backspace" class="col-sm-3">BS</button>
          <button id="divide" class="col-sm-3" onClick={this.props.handleButton}>/</button>
        </div>
        <div class="row">
          <button id="seven" class="col-sm-3" onClick={this.props.handleButton}>7</button>
          <button id="eight" class="col-sm-3" onClick={this.props.handleButton}>8</button>
          <button id="nine" class="col-sm-3" onClick={this.props.handleButton}>9</button>
          <button id="multiply" class="col-sm-3" onClick={this.props.handleButton}>*</button>
        </div>
        <div class="row">
          <button id="four" class="col-sm-3" onClick={this.props.handleButton}>4</button>
          <button id="five" class="col-sm-3" onClick={this.props.handleButton}>5</button>
          <button id="six" class="col-sm-3" onClick={this.props.handleButton}>6</button>
          <button id="subtract" class="col-sm-3" onClick={this.props.handleButton}>-</button>
        </div>
        <div class="row">
          <button id="one" class="col-sm-3" onClick={this.props.handleButton}>1</button>
          <button id="two" class="col-sm-3" onClick={this.props.handleButton}>2</button>
          <button id="three" class="col-sm-3" onClick={this.props.handleButton}>3</button>
          <button id="add" class="col-sm-3" onClick={this.props.handleButton}>+</button>
        </div>
        <div class="row">
          <button id="zero" class="col-sm-6" onClick={this.props.handleButton}>0</button>
          <button id="decimal" class="col-sm-3" onClick={this.props.handleButton}>.</button>
          <button id="equals" class="col-sm-3" onClick={this.props.handleButton}>=</button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numDisplay: '',
      decimal: false,
      operation: '',
      numStore: 0
    };
    this.handleButton = this.handleButton.bind(this);
  }
  doMath(num1, operation, num2) {
    switch (operation) {
      case '+':
        return num2 + num1;
      break;
      case '-':
        return num2 - num1;
      break;
      case '*':
        return num2 * num1;
      break;
      case '/':
        return num2 / num1;
      break;
      default:
        return num1;
      break;
    }
  }
  handleButton(event) {
    let curDisplay = this.state.numDisplay;
    let curStore = this.state.numStore;
    switch(event.target.id) {
      case 'one': 
        curDisplay += '1';
        break;
      case 'two':
        curDisplay += '2';
        break;
      case 'three':
        curDisplay += '3';
        break;
      case 'four':
        curDisplay += '4';
      break;
      case 'five':
        curDisplay += '5';
      break;
      case 'six':
        curDisplay += '6';
      break;
      case 'seven':
        curDisplay += '7';
      break;
      case 'eight':
        curDisplay += '8';
      break;
      case 'nine':
        curDisplay += '9';
      break;
      case 'zero':
        if (curDisplay !== '') {
          curDisplay += '0';
        }
      break;
      case 'decimal':
        if (this.state.decimal === false) {
          this.setState({decimal: true});
          curDisplay += '.';
        }
      break;
      case 'add':
        if (curDisplay !== '-' && curDisplay !== '') {
          curStore = this.doMath(parseFloat(curDisplay),this.state.operation, curStore);
        }
        curDisplay = '';
        this.setState({operation: '+', decimal: false});
        console.log(this.state);
      break;
      case 'subtract':
        if (curDisplay !== '') {
        curStore = this.doMath(parseFloat(curDisplay),this.state.operation, curStore);
        curDisplay = '';
        this.setState({operation: '-', decimal: false});
        console.log(this.state);
        }
        else {
          curDisplay = '-';
        }
      break;
      case 'multiply':
        if (curDisplay !== '-' && curDisplay !== '') {
          curStore = this.doMath(parseFloat(curDisplay),this.state.operation, curStore);
        }
        curDisplay = '';
        this.setState({operation: '*', decimal: false});
        console.log(this.state);
      break;
      case 'divide':
        if (curDisplay !== '-' && curDisplay !== '') {
          curStore = this.doMath(parseFloat(curDisplay),this.state.operation, curStore);
        }
        curDisplay = '';
        this.setState({operation: '/', decimal: false});
        console.log(this.state);
      break;
      case 'clear':
        curStore = 0;
        curDisplay = '';
        this.setState({operation: '', decimal: false});
      break;
      case 'equals':
        curStore = this.doMath(parseFloat(curDisplay), this.state.operation, curStore);
        curDisplay = curStore.toString();
        this.setState({operation: '', decimal: false});
      break;
      default:
      break;
    }
    this.setState({numDisplay: curDisplay, numStore: curStore});
  }
  render() {
    return (
      <div id="calculator">
        <TopPanel display={this.state.numDisplay} store={this.state.numStore} />
        <BottomPanel handleButton={this.handleButton}/>
      </div>
    );
  }
}

export default App;
