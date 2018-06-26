import React from 'react';

function Header(){
  var divContainer = {
    displayFlex: 'flex',
    // justifyContent: 'space-between'
    // alignContent: 'space-between'
  };
  var divStyle = {
    // display: 'inline-flex',
    // flexDirection: 'column',
    marginTop: '15px',
    float: 'left'
  };
  var aStyle = {
    // justifyContent: 'space-evenly',
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    padding: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'blue',
  };
  var inputStyle = {

  };
  return (
    <div style={divContainer}>
      <div style={divStyle}>
        <a style={aStyle}>Home</a>
        <a style={aStyle}>Notifications</a>
        <a style={aStyle}>Messages</a>
      </div>
      <div style={inputStyle}>
        <input placeholder="Search"></input>
        <input placeholder="Tweet"></input>
      </div>
    </div>

  );
}

export default Header;
