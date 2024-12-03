import React, { useState } from "react";
import CommentBox from "../commentBox/commentBox";

function Detail({ meal, onClose, onUpdate }) {
  // Local state for editable fields
  const [editableMeal, setEditableMeal] = useState({ ...meal });

  // Handle changes to input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableMeal((prev) => ({ ...prev, [name]: value }));
  };

  // Handle menu updates
  const handleMenuChange = (index, field, value) => {
    const updatedMenu = [...editableMeal.menu];
    updatedMenu[index][field] = value;
    setEditableMeal((prev) => ({ ...prev, menu: updatedMenu }));
  };

  // Handle save
  const handleSave = () => {
    if (onUpdate) {
      onUpdate(editableMeal); // Call the parent update function
    }
    onClose(); // Close the detail view
  };

  return (
    <div className="meal-details d-flex flex-column p-4 border rounded bg-light">
      {/* Upper section with image and details */}
      <div className="d-flex flex-column flex-lg-row">
        {/* Left side: Image */}
        <div className="meal-image me-4">
          <img
            src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
            alt={editableMeal.title}
            className="img-fluid rounded"
            style={{ maxWidth: "500px" }}
          />
          <div className="img-info">
            <textarea
              className="form-control mb-3"
              name="description"
              value={editableMeal.description}
              onChange={handleInputChange}
              placeholder="Enter description"
            ></textarea>
            {/* Display Menu */}
            <p>
              <strong>Menu:</strong>
            </p>
            <ul>
              {editableMeal.menu.map((item, index) => (
                <li key={index} className="mb-2">
                  <input
                    type="text"
                    className="form-control mb-1"
                    value={item.item}
                    onChange={(e) =>
                      handleMenuChange(index, "item", e.target.value)
                    }
                    placeholder="Menu item name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={item.price}
                    onChange={(e) =>
                      handleMenuChange(index, "price", e.target.value)
                    }
                    placeholder="Menu item price"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side: Details */}
        <div className="meal-info flex-grow-1">
          <input
            type="text"
            className="form-control mb-3"
            name="title"
            value={editableMeal.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="type"
            value={editableMeal.type}
            onChange={handleInputChange}
            placeholder="Enter type"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="distance"
            value={editableMeal.distance}
            onChange={handleInputChange}
            placeholder="Enter distance"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="price"
            value={editableMeal.price}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
          <textarea
            className="form-control mb-3"
            name="address"
            value={editableMeal.address}
            onChange={handleInputChange}
            placeholder="Enter address"
          ></textarea>

          {/* Display Hours */}
          <p>
            <strong>Hours:</strong>
          </p>
          <ul>
            {Object.entries(editableMeal.hours).map(([day, time], index) => (
              <li key={index} className="mb-2">
                <strong>
                  {day.charAt(0).toUpperCase() + day.slice(1)}:
                </strong>
                <input
                  type="text"
                  className="form-control"
                  value={time}
                  onChange={(e) =>
                    setEditableMeal((prev) => ({
                      ...prev,
                      hours: { ...prev.hours, [day]: e.target.value },
                    }))
                  }
                  placeholder={`Enter hours for ${day}`}
                />
              </li>
            ))}
          </ul>

          <button
            className="btn btn-success mt-3"
            style={{ justifyContent: "flex-end", width: "40%" }}
            onClick={handleSave}
          >
            Save Changes <i className="fas fa-save" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>

      {/* Close Button */}
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
