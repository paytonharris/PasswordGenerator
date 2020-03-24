import React from 'react';

let Styles = {
  labelStyle: {
    color: '#eadeda',
    borderRadius: '5px',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: '24px',
    transition: '.3s'
  },
  labelStyleOver: {
    color: '#544f6e',
    borderRadius: '5px',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'stretch',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: '24px',
    transition: '.3s'
  },
  divStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6ea8c',
    padding: '20px',
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    transition: '.3s',
    border: 'none'
  },
  divStyleOver: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#544f6e',
    padding: '20px',
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    transition: '.3s',
    border: 'none'
  }
}

class Button extends React.Component {
  state = {
    showBox: false
  };

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  
  render() {
    return (
      <div
        onMouseEnter={this.handleBoxToggle}
        onMouseLeave={this.handleBoxToggle}
      >
        <button onClick={this.props.handleClick} style={this.state.showBox ? Styles.divStyle : Styles.divStyleOver}>
          <label style={this.state.showBox ? Styles.labelStyleOver : Styles.labelStyle}>
            {this.props.children}
          </label>
        </button>
      </div>
    );
  }
}

export default Button;