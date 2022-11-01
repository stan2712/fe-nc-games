import axios from "axios";

const api = axios.create({
  baseURL: "https://stan-games.herokuapp.com/api",
});

export function getReviews() {
  return api.get(`/reviews`).then(({ data }) => {
    return data.reviews;
  });
}