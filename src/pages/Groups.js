import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchPosts } from '../services/WordpressAPI';
import Header from '../templates/Header';
import Background from '../templates/Background';
import Hero from '../components/Hero';

const Groups = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const loadPosts = async () => {
          setLoading(true);
          const fetchedPosts = await fetchPosts();
          setPosts(fetchedPosts);
          setLoading(false);
      };

      loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;


  return (
    <>
      <Background>
        <Header />
        <Hero title='Grupper' />
        <div className='text-center'>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Background>
    </>
  );
};

export default Groups;
