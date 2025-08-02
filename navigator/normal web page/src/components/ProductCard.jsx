import React from "react";

const ProductCard = ({ darkMode, title, price, desc, image, category }) => {
  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        height: "400px",
        width: "250px",
        border: "1px solid",
        borderColor: darkMode ? "#444" : "#ccc",
        borderRadius: "10px",
        boxShadow: darkMode ? "0 4px 8px rgba(0, 0, 0, 0.5)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        overflow: "hidden",
        backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        margin: "10px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = darkMode ? "0 8px 16px rgba(0, 0, 0, 0.7)" : "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = darkMode ? "0 4px 8px rgba(0, 0, 0, 0.5)" : "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
        src={image}
        alt={title}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.2em", margin: "0 0 10px" }}>{title}</h3>
        <p style={{ fontWeight: "bold", margin: "0 0 10px", fontSize: "1.1em" }}>${price}</p>
        <p style={{ margin: "0 0 10px", fontSize: "0.9em" }}>{desc}</p>
        <p style={{ fontStyle: "italic", margin: "0", fontSize: "0.8em" }}>{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;