import { useState, useEffect } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  let title = "All Reviews";
  if (category !== undefined) title = category;

  useEffect(() => {
    setLoading(true);
    getReviews(category).then((res) => {
      setReviews(res);
      setLoading(false);
    });
  }, [category]);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <main>
          <h3 className="reviews-title">{title}</h3>
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
