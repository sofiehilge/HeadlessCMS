import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Posts({ category, tag }) {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/posts?_embed`;
    //add category or tag filter to the API request if provided
    if (category) {
      url += `&categories=${category}`;
    }
    if (tag) {
      url += `&tags=${tag}`;
    }

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data;', error);
      });
  }, [category, tag]);

  //toggle the expansion of a post
  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="mx-4 my-6 space-y-6">
      {posts.map((post) => {
        const isExpanded = expandedPosts[post.id];
        const content = post.content.rendered;
        const truncatedContent = content.slice(0, 150) + '...';

        return (
          <div
            key={post.id}
            className="bg-backgroundColor bg-opacity-70 p-6 rounded-lg shadow-lg text-center animate-fadeIn"
          >
            <h2 className=" text-primaryColor font-semibold text-xl mb-2">
              {post.title.rendered}
            </h2>
            {post._embedded && post._embedded['wp:featuredmedia'] && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}
            <div
              className=" text-secondaryColor mb-4"
              dangerouslySetInnerHTML={{
                __html: isExpanded ? content : truncatedContent,
              }}
            />
            {isExpanded && (
              <div>
                <p className="text-secondaryColor">
                  Skriv til mig{' '}
                  <Link
                    to="/contact"
                    className="text-primaryColor font-bold hover:bg-secondaryColor transition-colors"
                  >
                    her
                  </Link>
                  , hvis du har nogle spørgsmål eller tanker du vil dele inden
                  du booker.
                </p>
                <Link to="/contact">
                  <button className=" bg-primaryColor text-backgroundColor font-bold py-2 px-4 rounded-lg hover:bg-secondaryColor transition-colors mt-4 mb-4">
                    Kontakt mig
                  </button>
                </Link>
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => toggleExpand(post.id)}
                className="text-primaryColor hover:underline mb-4"
              >
                {isExpanded ? 'Læs mindre' : 'Læs mere'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
