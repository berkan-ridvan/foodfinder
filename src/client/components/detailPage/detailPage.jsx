import React from "react";
import CommentBox from '../commentBox/commentBox';
import "./index.scss";

function Detail({ meal, onClose }) {
  return (
    <div className="meal-details d-flex flex-column p-4 border rounded bg-light">
      {/* Upper section with image and details */}
      <div className="d-flex flex-column flex-lg-row">
        {/* Left side: Image */}
        <div className="meal-image me-4">
          <img
            src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
            alt={meal.title}
            className="img-fluid rounded"
            style={{ maxWidth: "500px" }}
          />
          <div className="img-info">

            <p>
              {meal.description}
            </p>
            {/* Display Menu */}
          <p>
            <strong>Menu:</strong>
          </p>
          <ul>
            {/* {meal.menu.map((item, index) => (
              <li key={index}>
                {item.item} - {item.price}
              </li>
            ))} */}
          </ul>
          </div>
        </div>

        {/* Right side: Details */}
        <div className="meal-info flex-grow-1">
          <h3 className="mb-3">{meal.title}</h3>
          <p>
            {meal.type}
          </p>
          <p>
            <strong>Distance:</strong> {meal.distance}
          </p>
          <p>
            <strong>Menu Average Price:</strong> {meal.price}
          </p>
          <p>
            <strong>Address:</strong> {meal.address}
          </p>
          

          {/* Display Hours */}
          <p>
            <strong>Hours:</strong>
          </p>
          <ul>
            {/* {Object.entries(meal.hours).map(([day, time], index) => (
              <li key={index}>
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {time}
              </li>
            ))} */}
          </ul>
          <button
            className="btn btn-success"
            style={{ justifyContent: "flex-end", width: "40%" }}
            onClick={onClose}
          >
            Get&nbsp;Direction <i className="fas fa-map-marker-alt white" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-0 d-flex gap-0">
        <button
          className="btn btn-secondary fixed-top-end"
          style={{
            position: "fixed",
            top: "20px",
            borderRadius: "40px",
            right: "40px",
            zIndex: 1000,
          }}
          onClick={onClose}
        >
          X
        </button>

      </div>

      {/* Horizontal Comment Section */}
      <div className="comment-section mt-0">
        <div className="w-100">
          <CommentBox />
        </div>
      </div>
    </div>
  );
}

export default Detail;
