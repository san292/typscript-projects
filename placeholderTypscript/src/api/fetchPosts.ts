export const fetchPosts = async () => {
  const response = await fetch(`https://jsonPlaceHolder.typicode.com/posts`);

  const data = await response.json();
  return data;
};
