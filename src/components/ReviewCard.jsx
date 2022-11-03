import { Link } from "react-router-dom";
import Voter from "./Voter";

const ReviewCard = ({ review }) => {
  const {
    title,
    review_body,
    comment_count,
    review_img_url,
    votes,
    category,
    review_id,
  } = review;

  return (
    <div className="review-card">
      {" "}
      <li>
        <Link to={`/Reviews/${review_id}`}>
          <div className="review-card-title">
            Game: {title} - Category: {category}
          </div>
        </Link>
        <img src={review_img_url} className="review-card-img" alt="the game" />
        <div className="review-card-info">
          <p className="review-text">{review_body}</p>
          <Voter review={review}/>
          <p>Number of comments: {comment_count}</p>
        </div>
      </li>
    </div>
  );
};

export default ReviewCard;
