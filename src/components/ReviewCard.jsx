const ReviewCard = ({ review }) => {
  const { title, review_body, comment_count, review_img_url, votes, category } =
    review;

  return (
    <div className="review-card">
      {" "}
      <li>
        <div className="review-card-title">
          Game: {title} - Category: {category}
        </div>
        <img src={review_img_url} className="review-card-img" alt="the game" />
        <div className="review-card-info">
          <p>Review Body: {review_body}</p>
          <p>Number of likes: {votes}</p>
          <p>Number of comments: {comment_count}</p>
        </div>
      </li>
    </div>
  );
};

export default ReviewCard;
