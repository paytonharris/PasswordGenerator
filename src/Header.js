import React from 'react';

let Styles = {
  divStyle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',
    backgroundColor: '#2e294e',
  },
  titleStyle: {
    color: '#ffe0b5',
    fontSize: '40px',
    padding: 15,
    fontFamily: 'Lato',
  }
}

export default function Header(props) {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.titleStyle}>Password Generator</label>
    </div>
  );
}
