import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../templates/Header';
import Hero from '../components/Hero';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts?_embed`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <Hero title='Grupper' />
      {posts.map((post) => (
        <div className='flex flex-col text-center' key={post.id}>
          <h2 className='h2 text-primaryColor'>{post.title.rendered}</h2>
          {/* Render the featured image if it exists */}
          {post._embedded && post._embedded['wp:featuredmedia'] && (
            <img
            src={post._embedded['wp:featuredmedia'][0].source_url}
            alt={post.title.rendered}
            className='mx-auto mb-4'
            />
          )}
          <div className='h3 text-secondaryColor mx-6 text-pretty mt-6' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default App;
