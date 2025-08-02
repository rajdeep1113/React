import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer style={{
      background: darkMode ? "black" : "lightsteelblue",
         color: darkMode ? "white" : "white",
      border: "1px solid black",
      height: "75px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      marginTop:"10px"
    }}>
      <p style={{ color: "white" }}>© 2025 Zudio. All rights reserved.</p>
      {/* <button onClick={() => setDarkMode(!darkMode)} 
        style={{
          background: darkMode ? "gray" : "lightgray",
          border: "none",
          color: darkMode ? "white" : "black",
          padding: "10px",
          cursor: "pointer",
        }}>
        Toggle Dark Mode
      </button> */}
    </footer>
  );
}

export default Footer;