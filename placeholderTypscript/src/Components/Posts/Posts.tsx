import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Post from '../Post/Post';

import { PostData } from '../../interfaces';
import { fetchPosts } from '../../api/fetchPosts';

import './Posts.css';

const Posts = () => {
  const [allPost, setAllPost] = useState<PostData[]>(() =>
    JSON.parse(localStorage.getItem('data'))
  );
  const [numberOfpost, setNumberOfPost] = useState(5);

  useEffect(() => {
    fetchPosts().then((res) => setAllPost(res));
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(allPost));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    setNumberOfPost(e.target.value);
    localStorage.setItem('number', e.target.value);
  };

  return (
    <>
      <div className="posts">
        <Input numberOfPost={numberOfpost} onChange={handleChange} />

        <h1>List des postes </h1>

        <ul className="posts-ul">
          {allPost?.slice(0, numberOfpost)?.map((post) => (
            <li className="posts-li" key={post.id}>
              <Post post={post} />
              <Link to={`/${post.id}`}>Plus de details</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
