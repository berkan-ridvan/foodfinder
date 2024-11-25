import React from "react";
import "./index.scss";


function DetailAdmin({ meal, onClose }) {
  return (
    <div className="meal-details d-flex flex-column flex-lg-row p-4 border rounded bg-light">
      {/* Sol tarafta resim */}
      <div className="meal-image me-4">
        <img
          src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM=" 
          alt={meal.title}
          className="img-fluid rounded"
          style={{ maxWidth: "500px" }}
        />
        <div className="img-info flex-grow-1">
        <p>
          <strong>The Best Restuarant In Huntsville</strong>
        </p>
        <p>
        Our restaurant offers a delightful variety of dishes, including freshly made pizzas with a perfect blend of flavors. From classic Italian favorites to unique creations, there's something to satisfy every taste. Enjoy a warm, inviting atmosphere and exceptional service with every meal.
        </p>
        </div>
      
      
        
      </div>

      {/* Sağ tarafta bilgiler */}
      <div className="meal-info flex-grow-1">
        <h3 className="mb-3">{meal.title}</h3>
        <p className="mb-4">{meal.details}</p>
        <p>
          <strong>Restaurant Name:</strong> {meal.restaurant}
        </p>
        
        <p>
          <strong>Distance:</strong> {meal.distance}
        </p>
        <p>
          <strong>Menu Average Price:</strong> {meal.price}
        </p>
        <p>
          <strong>Distance Time:</strong> {meal.price}
        </p>

      </div>

      {/* Alt kısımda kapatma butonu */}
      <button
        className="btn btn-secondary mt-3 align-self-start align-self-lg-end"
        onClick={onClose}
      >
        Close
      </button>
      <button
        className="btn btn-danger mt-3 align-self-start align-self-lg-end"
        onClick={onClose}
      >
        Remove
      </button>
      <button
        className="btn btn-success mt-3 align-self-start align-self-lg-end"
        onClick={onClose}
      >
        Update
      </button>
    </div>
  );
}

export default DetailAdmin;
