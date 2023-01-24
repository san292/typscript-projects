interface Postype {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const Post = ({ post }: Postype) => {
  return (
    <div>
      <h2>titre : {post?.title}</h2>
    </div>
  );
};

export default Post;
