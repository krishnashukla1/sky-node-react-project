import '../styles/InputField.css';

const InputField = ({ type, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input-field"
    />
  );
};

export default InputField;