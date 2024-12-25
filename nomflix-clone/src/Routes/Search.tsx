import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get("keyword");
  return keyword;
}

export default Search;
