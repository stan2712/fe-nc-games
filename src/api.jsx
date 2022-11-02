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

export function getCategories() {
  return api.get(`/categories`).then(({ data }) => {
    return data;
  });
}
