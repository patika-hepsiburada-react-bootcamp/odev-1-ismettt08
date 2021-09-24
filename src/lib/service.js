import axios from "axios";

export default async function getData(userID) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );

    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );

    return { ...res.data, posts: posts.data };
  } catch (error) {
    return error.response.status;
  }
}
