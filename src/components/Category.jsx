import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import Categories from "./Categories";

const Category = () => {
  let { category } = useParams();

  return (
    <div className="ReviewsPage">
      <Categories />
      <Reviews category={category} />
    </div>
  );
};

export default Category;
