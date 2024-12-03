import React, { useState } from "react";

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && name.trim() !== "" && rating > 0) {
      const currentDate = new Date().toLocaleString(); // Get the current date and time
      setComments([
        ...comments,
        { name, comment: newComment, date: currentDate, rating },
      ]);
      setNewComment("");
      setName("");
      setRating(0);
    }
  };

  return (
    <div className="mt-0">
      <div className="card">
        
        <div className="card-body">
          <ul className="list-group mb-1">
            {comments.length > 0 ? (
              comments.map((item, index) => (
                <li key={index} className="list-group-item">
                  <strong>{item.name}</strong> ({item.date}) - <strong>{item.rating}⭐</strong>
                  <br />
                  {item.comment}
                </li>
              ))
            ) : (
              <li className="list-group-item text-muted">No comments yet.</li>
            )}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-1">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
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
