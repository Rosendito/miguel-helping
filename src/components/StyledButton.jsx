import cnMerge from "../utils/classnamesMerge";

const StyledButton = ({ label = "", className = "", ...props }) => {

  const buttonClasses = {
    root: "bg-transparent hover:bg-[#a5a5a6] text-[#a5a5a6] font-semibold hover:text-white py-2 px-4 border border-[#a5a5a6] rounded-lg hover:border-transparent"
  };

  return (
    <button
      {...props}
      className={cnMerge([buttonClasses.root, className])}
    >
      {label}
    </button>
  );
};

export default StyledButton;