import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailsPost from '../../Components/DetailsPost/DetailsPost';
import './PostDetails.css';

const PostDetails: React.FC = () => {
  const [postDetails, setpostDetails] = useState([]);

  const { id } = useParams();

  const fetchDetailsPost = async () => {
    const response = await fetch(
      `https://jsonPlaceHolder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setpostDetails(data);
  };
  useEffect(() => {
    fetchDetailsPost();
  }, [id]);

  return (
    <div className="detailsCard">
      <DetailsPost post={postDetails} />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default PostDetails;
