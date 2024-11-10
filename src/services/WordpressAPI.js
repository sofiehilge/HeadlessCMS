import axios from "axios";

// services/WordpressAPI.js

const API_URL = "http://localhost/freeingthebeing/wp-json/wp/v2";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
