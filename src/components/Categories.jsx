// get list of categories from api
// have input for category
// if review contains input category, then show it

import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { Link, } from "react-router-dom";


const Categories = () => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([{}]);
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <h2>Loading</h2>
  if (isClosed)
    return (
      <nav >
        <button className="cat-slug-butt" onClick={handleClick}>Categories</button>
      </nav>
    );
    return (
		<nav >
			<button className="cat-slug-butt" onClick={handleClick}>Close</button>
			
            <div >
				<Link to="/" className="cat-slug">All reviews</Link>

				{categories.map((category) => {
					return (
						<Link
							to={`/category/${category.slug}`}
							key={category.slug}
                            className="cat-slug"
						>
						   {category.slug}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Categories;