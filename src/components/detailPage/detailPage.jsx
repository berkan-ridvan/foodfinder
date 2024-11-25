import React from "react";
import "./index.scss";


function Detail({ meal, onClose }) {
  return (
    <div className="meal-details d-flex flex-column flex-lg-row p-4 border rounded bg-light">
      {/* Sol tarafta resim */}
      <div className="meal-image me-4">
        <img
          src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=2048x2048&w=is&k=20&c=BZiNKDrgDpdXFKimB69ynYx6kZeSQBzrWAomGs05GEg=" // Örnek resim, meal.image gibi bir veriyle değiştirilebilir
          alt={meal.title}
          className="img-fluid rounded"
          style={{ maxWidth: "500px" }}
        />
        <div className="img-info flex-grow-1">
        <p>
          <strong>ADD HERE ANYTHING FROM DATABASE</strong>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam facilis necessitatibus eligendi blanditiis? Ex sed repellat cum assumenda incidunt quasi, accusantium expedita, at adipisci maxime veniam harum ullam, delectus dolores.
        </p>
        </div>
      
      
        
      </div>

      {/* Sağ tarafta bilgiler */}
      <div className="meal-info flex-grow-1">
        <h3 className="mb-3">{meal.title}</h3>
        <p className="mb-4">{meal.details}</p>
        <p>
          <strong>Restaurant:</strong> {meal.restaurant}
        </p>
        
        <p>
          <strong>Distance:</strong> {meal.distance}
        </p>
        <p>
          <strong>Price:</strong> {meal.price}
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore? Blanditiis possimus pariatur praesentium deleniti expedita voluptates ad maxime fugit iste? Qui, soluta dolorum laborum incidunt est alias rerum recusandae.
        </p>

      </div>

      {/* Alt kısımda kapatma butonu */}
      <button
        className="btn btn-secondary mt-3 align-self-start align-self-lg-end"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default Detail;
