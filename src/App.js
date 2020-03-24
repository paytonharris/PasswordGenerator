import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Passwords from './Passwords';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: '#eadeda', display: 'flex', flexDirection: 'column'}}>
        <Header changePage={this.changePage}/>
        <Passwords />
        <Footer />
      </div>
    );
  }
};
