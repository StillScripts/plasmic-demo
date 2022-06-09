import React, { CSSProperties, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Button = ({ children, className, style }: ButtonProps) => {
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export default Button;
