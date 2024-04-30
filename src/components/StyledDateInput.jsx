import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import cnMerge from "../utils/classnamesMerge";

const inputClasses = {
  root: "group relative h-14 border-2 rounded-lg border-[#a5a5a6]",
  label: "uppercase absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-sm text-[#a5a5a6] pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary",
  input: "w-full h-0 outline-none bg-transparent"
};

const StyledDateInput = ({
  placeholder,
  helperText,
  value,
  leftElement = null,
  rightElement = null,
  error = false,
  rootClass = "",
  labelClass = "",
  inputClass = "",
  ...props
}) => {

  const [startDate, setStartDate] = useState(value);

  const errorClass = error && "border-red-500";
  const errorLabelClass = error && "text-red-500";

  return (
    <div className={cnMerge([inputClasses.root, rootClass, errorClass])}>
      <label
        className={cnMerge([inputClasses.label, labelClass, errorLabelClass, props.selected && "top-0 left-2 text-xs"])}
        htmlFor={props.id ?? props.name}
      >
        {placeholder}
      </label>
      <DatePicker
        id={props.id ?? props.name}
        showIcon
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onChange(date);
        }}
        {...props}

        className={cnMerge([inputClasses.input, inputClass])}
      />

      {error &&
        <p
          className="text-red-500 leading-4 text-xs text-justify pt-2"
        >
          {helperText}
        </p>
      }
    </div>
  );
};

export default StyledDateInput;