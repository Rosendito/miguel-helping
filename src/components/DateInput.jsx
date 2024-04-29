import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ id, title, selected, onChange }) => {
  const [startDate, setStartDate] = useState(selected);
  
  return (
    <div className="relative w-full">
      <div className="w-full">
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            onChange(date); // Asegúrate de pasar la fecha seleccionada al componente padre
          }}
          placeholderText="Seleccione su fecha de nacimiento"
          className="w-full py-4 px-3 rounded border outline-none focus:border-primary-color"
        />
      </div>
      <label htmlFor={id} className="absolute top-0 left-0 font-bold ml-2 mt-1 text-xs text-primary-color">{title}</label>
    </div>
  );
};
  
export default DateInput;
