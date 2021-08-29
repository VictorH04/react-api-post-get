import { useParams, Link } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hei fra PostPage post: {id}</h1>
    </div>
  );
};

export default PostPage;
