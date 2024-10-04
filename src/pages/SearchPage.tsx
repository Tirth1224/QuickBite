import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return <span>User Searched for {city}</span>;
};

export default SearchPage;
