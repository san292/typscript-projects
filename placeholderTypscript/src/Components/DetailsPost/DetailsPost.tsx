interface Postype {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const DetailsPost = ({ post }: Postype) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailsPost;
