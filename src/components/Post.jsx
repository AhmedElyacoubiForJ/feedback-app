//import { useParams } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom";
function Post() {
  /* const params = useParams()
    return (
    <div>
      <h1>Post: {params.id} {params.name}</h1>
    </div>
  ) */
  const status = 200;
  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    navigate('/about')
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default Post;
