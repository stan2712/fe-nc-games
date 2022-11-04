import { getComments } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = () => {
  const [isLoading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getComments(review_id).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [review_id]);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <main className="comments">
          <div>
            <ul>
              {comments.map((comment) => {
                return (
                  <CommentCard key={comment.comment_id} comment={comment} />
                );
              })}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
};

export default Comments;
