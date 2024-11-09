import React from "react";
import "./FindUs.css";

const FindUs = () => {
  return (
    <div className="find-us-container">
      <h2>Encuéntranos</h2>
      <div className="find-us-info">
        <p>Visítanos en nuestra tienda física, ubicada en:</p>
        <p className="address">Calle Ficticia 123, Ciudad Santiago, Chile</p>
        <a
          href="https://www.google.com/maps?q=Calle+Ficticia+123,+Ciudad+XYZ,+País+ABC"
          target="_blank"
          rel="noopener noreferrer"
          className="view-map-button"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default FindUs;
