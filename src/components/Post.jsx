import { useParams } from "react-router-dom"
function Post() {
    const params = useParams()
  return (
    <div>
      <h1>Post: {params.id} {params.name}</h1>
    </div>
  )
}

export default Post
