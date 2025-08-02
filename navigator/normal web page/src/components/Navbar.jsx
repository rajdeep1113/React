import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav
        style={{
          background: darkMode ? "#003366" : "#00bfff", // Dark blue for dark mode, light blue for light mode
          color: darkMode ? "white" : "black",
          borderBottom: "2px solid #ccc",
          height: "75px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Shoe Store</h1>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: "2rem",
            margin: 0,
          }}
        >
          <li><a href="#" style={linkStyle(darkMode)}>Home</a></li>
          <li><a href="#" style={linkStyle(darkMode)}>About</a></li>
          <li><a href="#" style={linkStyle(darkMode)}>Services</a></li>
          <li><a href="#" style={linkStyle(darkMode)}>Contact</a></li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "#555" : "#ddd",
              border: "none",
              color: darkMode ? "white" : "black",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Toggle Mode
          </button>
        </ul>
      </nav>
    </>
  );
};

// Helper function to style links based on dark mode
const linkStyle = (darkMode) => ({
  textDecoration: "none",
  color: darkMode ? "white" : "black",
  transition: "color 0.3s",
  padding: "5px 10px",
  borderRadius: "5px",
  '&:hover': {
    backgroundColor: darkMode ? "#00509e" : "#b3e0ff", // Darker shade on hover
  },
});

export default Navbar;