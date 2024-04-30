import cn from "classnames";
import { twMerge } from "tailwind-merge";

const cnMerge = (...classNames) => {
  return twMerge(cn(classNames));
};

export default cnMerge;