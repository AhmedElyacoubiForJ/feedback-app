//import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
function Post() {
  /* const params = useParams()
    return (
    <div>
      <h1>Post: {params.id} {params.name}</h1>
    </div>
  ) */
  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post:</h1>
    </div>
  );
}

export default Post;
