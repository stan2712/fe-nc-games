const CommentCard = ({ comment }) => {
  return (
    <div>
      <h4>{comment.author} on {new Date(comment.created_at.replace(" ", "T")).toUTCString()}</h4>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
