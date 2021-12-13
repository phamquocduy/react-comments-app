import { Link } from "react-router-dom";

export const NoMatchPage = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the Home Page</Link>
      </p>
    </div>
  );
};
