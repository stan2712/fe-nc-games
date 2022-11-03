import { useState } from "react";
import { patchVotes } from "../api";

// api.patch(`api/${type}/${id}`, { inc_votes: num });

const Voter = ({ review }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(review.votes);
  const [notVoted, setNotVoted] = useState(true);

  const ogVotes = review.votes

  const resetVote = () => {
    setVotes(ogVotes)
    setDownvote(false)
    setUpvote(false)
    setNotVoted(true)
  }

  const handleUpvote = (review_id, inc_vote) => {
    if (!upvote && notVoted) {
      patchVotes(review_id, inc_vote).then(() => {
        setVotes((currVotes) => currVotes + inc_vote);
        setDownvote(false);
        setUpvote(true);
        setNotVoted(false);
      }).catch((err) => notVoted(true))
    } else {
      patchVotes(review_id, inc_vote).then(() => {
        setVotes((currVotes) => currVotes + inc_vote + 1);
        setDownvote(false);
        setUpvote(true);
        setNotVoted(false);
      }).catch((err) => notVoted(true))
    }
  };

  const handleDownvote = (review_id, inc_vote) => {
    if (!downvote && notVoted) {
      patchVotes(review_id, inc_vote).then(() => {
        setVotes((currVotes) => currVotes + inc_vote);
        setUpvote(false);
        setDownvote(true);
        setNotVoted(false);
      }).catch((err) => notVoted(true))
    } else {
      patchVotes(review_id, inc_vote).then(() => {
        setVotes((currVotes) => currVotes + inc_vote - 1);
        setDownvote(true);
        setUpvote(false);
        setNotVoted(false);
      }).catch((err) => notVoted(true))
    }
  };

  return (
    <div>
      <button
        disabled={upvote === true}
        onClick={() => {
          handleUpvote(review.review_id, 1);
        }}
      >
        Like
      </button>
      <div className ="vote-heart" onClick={resetVote}> ❤️️ {votes} - Click to reset vote</div>
      <button
        disabled={downvote === true}
        onClick={() => {
          handleDownvote(review.review_id, -1);
        }}
      >
        Dislike
      </button>
    </div>
  );
};

export default Voter;
