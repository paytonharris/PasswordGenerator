import React from 'react';
import Button from './Button';
import { getPassword } from './Helpers/helper';

let Styles = {
  divStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
    paddingBottom: '5px',
    width: '100%',
  },
  passwordStyle: {
    color: '#2e294e',
    fontSize: '60px',
    width: '250px',
    marginLeft: '50px',
    marginRight: '50px',
    fontFamily: 'Lato',
  },
  invisible: {
    opacity: 0.01,
  },
  fadeIn: {
    opacity: 1,
    transition: '0.3s'
  }
}

class Passwords extends React.Component {
  state = {
    generatedPassword: '',
    currentTextStyle: Styles.invisible
  };

  generatePassword = () => {
    var password = getPassword();

    this.setState({...this.state, currentTextStyle: Styles.invisible, generatedPassword: password });
    setTimeout(() => {this.setState({ ...this.state, currentTextStyle: Styles.fadeIn })}, 30)
  };

  render() {
    return (
      <div style={Styles.divStyle}>
        <Button handleClick={this.generatePassword}>Generate Password:</Button>
        <label style={{...Styles.passwordStyle, ...this.state.currentTextStyle}}>{this.state.generatedPassword}</label>
      </div>
    );
  }
}

export default Passwords;