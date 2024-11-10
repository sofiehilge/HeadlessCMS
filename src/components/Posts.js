import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts({ category, tag }) {
  const [posts, setPosts] = useState([]);
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
        console.error("Error fetching data;", error);
      });
  }, [category, tag]);

  return (
    <div>
      {posts.map((post) => (
        <div className="flex flex-col text-center" key={post.id}>
          <h2 className="h2 text-primaryColor">{post.title.rendered}</h2>
          {post._embedded && post._embedded["wp:featuredmedia"] && (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              className="mx-auto mb-4"
            />
          )}
          <div
            className="h3 text-secondaryColor mx-6 text-pretty mt-6"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      ))}
    </div>
  );
}

export default Posts;
