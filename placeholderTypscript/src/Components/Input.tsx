interface numberPostProps {
  numberOfPost: number;
  onChange: (value: numberOfPost | undefined) => void;
}

const Input: React.FC<numberPostProps> = ({ onChange, numberOfPost }) => {
  return (
    <div>
      <label htmlFor="posts">de post : {numberOfPost}</label>
      <input
        style={{ width: '30rem' }}
        type="range"
        min={1}
        max={10}
        onChange={onChange}
        value={numberOfPost}
      />
    </div>
  );
};

export default Input;
