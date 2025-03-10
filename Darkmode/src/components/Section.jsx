import React from "react";
// import ShoeLogo from "../images/ShoeLogo.png"; // Replace with your shoe store logo
import ProductCard from "./ProductCard";

const Section = ({ darkMode }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <ProductCard
          title="Nike Air Max 270"
          price="150"
          desc="Stylish and comfortable sneakers with a large air unit for cushioning."
          image=  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/374915/01/sv01/fnd/IND/fmt/png"
          category="Sneakers"
          darkMode={darkMode}
        />

        <ProductCard
          title="Adidas Ultraboost 21"
          price="180"
          desc="High-performance running shoes with responsive cushioning and a snug fit."
          image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/390201/01/sv01/fnd/IND/fmt/png"
          category="Running Shoes"
          darkMode={darkMode}
        />

        <ProductCard
          title="Puma RS-X"
          price="110"
          desc="Retro-inspired sneakers with bold colors and a chunky silhouette."
          image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/371149/01/sv01/fnd/IND/fmt/png"
          category="Casual Shoes"
          darkMode={darkMode}
        />

      
      </div>
    </>
  );
};

export default Section;