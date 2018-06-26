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
        <a className="buttons">Messages</a>

      </div>
      <div>
        <input className="inputFields" placeholder="Search"></input>
        <input className="inputFields" placeholder="Tweet"></input>

      </div>
      <style jsx>{`
          .buttons {
            color:black;
            border-style: solid;
            border-width: 2px;
            border-color: blue;
          }
          `}</style>
      </div>

    );
  }

  export default Header;
