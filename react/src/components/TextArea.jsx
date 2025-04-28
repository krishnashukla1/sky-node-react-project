import '../styles/TextArea.css';

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-area"
    />
  );
};

export default TextArea;