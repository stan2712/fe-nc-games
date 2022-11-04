import axios from "axios";

const api = axios.create({
  baseURL: "https://stan-games.herokuapp.com/api",
});

export function getReviews(category) {
  return api
    .get("/reviews", { params: { category: category } })
    .then(({ data }) => {
      return data.reviews;
    });
}

export function getReview(review_id) {
  return api.get(`/reviews/${review_id}`).then(({ data }) => {
    return data;
  });
}

export function getCategories() {
  return api.get(`/categories`).then(({ data }) => {
    return data;
  });
}

export function patchVotes(review_id, vote) {
  return api
    .patch(`/reviews/${review_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data;
    });
}

export function getComments(review_id) {
  return api.get(`/reviews/${review_id}/comments`).then(({data})=> {
    return data
  })
}
