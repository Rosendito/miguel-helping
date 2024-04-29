import React from 'react';

const Input = ({ type, id, title, placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full py-4 px-3 rounded border outline-none focus:border-primary-color"
      />
      <label htmlFor={id} className="absolute top-0 left-0 font-bold ml-2  mt-1 text-xs text-primary-color">{title}</label>
    </div>
  );
};

export default Input;
