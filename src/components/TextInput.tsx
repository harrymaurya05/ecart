import React from 'react';
import  './../assets/css/TextInput.css'

// ... rest of the code

interface TextInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
