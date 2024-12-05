import React, { useState } from "react";

function CommentBox({accNumber, establishment}) {
  const url = "http://localhost:8787";
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && rating > 0) {
      fetch(`${url}/api/postReview`, {
        method: "POST",
        headers: {"ContentType": "application/json"},
        body: JSON.stringify({id: establishment.id, acc: accNumber, comment: newComment, rating: rating}),
      }).catch((error) => {console.error("Request failed:", error)});
      
      setNewComment("");
      setRating(0);
    }
  };

  return (
    <div className="mt-0">
      <div className="card">
        
        <div className="card-body">
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-1">
              <label htmlFor="comment" className="form-label">
                Add a Comment
              </label>
              <textarea
                id="comment"
                className="form-control"
                rows="2"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <div className="mb-1">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <select
                id="rating"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
              >
                <option value="0">Select a rating</option>
                <option value="1">1⭐</option>
                <option value="2">2⭐</option>
                <option value="3">3⭐</option>
                <option value="4">4⭐</option>
                <option value="5">5⭐</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
