import React from 'react';

let Styles = {
  divStyle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '200px',
    paddingBottom: '5px',
  },
  titleStyle: {
    color: '#000000',
    opacity: 0.2,
    fontSize: '10px',
    padding: 15,
    fontFamily: 'Lato',
  }
}

export default function Footer() {
  return (
    <div style={Styles.divStyle}>
      <label style={Styles.titleStyle}>v1.2 | Powered by <a target="_blank" href="https://github.com/paytonharris/PasswordGenerator">Beans</a></label>
    </div>
  );
}
