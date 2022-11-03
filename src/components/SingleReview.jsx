import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReview } from "../api";

const SingleReview = () => {
  const [isLoading, setLoading] = useState(true);
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getReview(review_id).then((res) => {
      setSingleReview(res);
      setLoading(false);
    });
  }, [review_id]);

  const {
    title,
    review_body,
    comment_count,
    review_img_url,
    votes,
    category,
    owner,
    designer,
    created_at,
  } = singleReview;

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="single-review-card">
          {" "}
          <li className="single-review-list">
            <div className="single-review-card-title">
              Game: {title} -- Created by: {designer}
            </div>

            <img
              src={review_img_url}
              className="single-review-card-img"
              alt="the game"
            />
            <div className="single-review-card-info">
              <p>Category: {category}</p>
              <p className="review-text" >{review_body}</p>
              <p>Writer: {owner}</p>
              <p>Number of likes: {votes}</p>
              <p>Number of comments: {comment_count}</p>
              <p>Date created; {created_at}</p>
            </div>
          </li>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
