import React, { useEffect, useState } from "react";
import CommentBox from '../commentBox/commentBox';
import "./index.scss";

function Detail({ accNumber, establishment, onClose }) {
  const url = "http://localhost:8787";
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const now = new Date();

  function parseTimeRange(range) {  
    const [openTime, closeTime] = range.split('-');

    function to24Hour(time) {
      const period = time.slice(-2);
      let hour = parseInt(time.slice(0, -2), 10)
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        return hour = 0;
      }

      return hour;
    }
    return [to24Hour(openTime), to24Hour(closeTime)];
  };

  function isOpen(hoursOpen) {
    let hours = now.getHours();
    let hoursOfOperation = parseTimeRange(hoursOpen);
    return hoursOfOperation[0] <= hours && hours <= hoursOfOperation[1] ? "[OPEN]" : "[CLOSED]";
  };

  // Get reviews for focused establishment
  useEffect(() => {
    async function fetchReviews(e) {
      try {
        fetch(`${url}/api/getReviews`, {
          method: "POST",
          headers: {
            "ContentType": "application/json"
          },
          body: JSON.stringify({title: e.title})
        }).then(response => response.json()).then(data => {
          if (data.result) {
            setReviews(data.reviews);
          } else {
            console.log("Got nothing");
          }
        })
      } catch (error) {
        console.log("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews(establishment);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-3 bg-secondary text-white d-flex flex-column p-3"
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            fontSize: "0.8rem",
            maxHeight: "800px", // Maksimum yükseklik
            overflowY: "auto",  // Dikey kaydırma çubuğu
            borderRadius: "5px", // Köşeleri yuvarlatmak için
          }}
        >
          <h1 style={{ fontSize: "2rem", lineHeight: "1.2" }}>Reviews</h1>
          {/* COMMENT SECTION */}
          {reviews.map((item, index) => (
            <div
              key={index}
              className="card mb-1"
              style={{
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "15px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="card-body">
                <h6 className="card-title">
                  <strong>
                    {item.username} - {item.rating}⭐
                  </strong>
                </h6>
                <p className="card-text">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-9 bg-light">
          <div className="meal-details d-flex flex-column p-4 border rounded bg-light">
            {/* Upper section with image and details */}
            <div className="d-flex flex-column flex-lg-row">
              {/* Left side: Image */}
              <div className="meal-image me-4">
                <img
                  src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
                  alt={establishment.title}
                  className="img-fluid rounded"
                  style={{ maxWidth: "300px" }}
                />
                <div className="img-info">
                  <p>
                    {establishment.description}
                  </p>
                  {/* Display Menu */}
                  <p>
                    <strong>Menu:</strong>
                  </p>
                  {/* <ul>
                    {establishment.menu.map((item, index) => (
                      <li key={index}>
                        {item.item} - {item.price}
                      </li>
                    ))} */}
                  {/* </ul> */}
                </div>
              </div>

              {/* Right side: Details */}
              <div className="meal-info flex-grow-1">
                <h3 className="mb-3">{establishment.title}</h3>
                <p>
                  <strong>Hours:</strong> {establishment.hours} {isOpen(establishment.hours)}
                </p>         
                <p>
                  <strong>Distance:</strong> {establishment.distance}
                </p>
                <p>
                  <strong>Price Range:</strong> {establishment.price}
                </p>
                <p>
                  <strong>Cuisine Type: </strong>{establishment.category}
                </p>
                <p>
                  <strong>Address:</strong> {establishment.address}
                </p>

                {/* <ul>
                  {Object.entries(meal.hours).map(([day, time], index) => (
                    <li key={index}>
                      <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {time}
                    </li>
                  ))}
                </ul> */}

                {/* Exit Button */}
                <button
                  className="btn btn-success"
                  style={{ justifyContent: "flex-end",minWidth:"200px", width: "40%" }}
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
                <CommentBox accNumber={accNumber} establishment={establishment}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
