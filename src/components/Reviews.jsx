import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    getReviews().then((res) => {
      console.log(res);
      setReviews(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <main>
          <h3 className="reviews-title">Reviews</h3>
          <div>
            <ul className="reviews-list">
              {reviews.map((review) => {
                return <ReviewCard key={review.review_id} review={review} />;
              })}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
};

export default Reviews;
