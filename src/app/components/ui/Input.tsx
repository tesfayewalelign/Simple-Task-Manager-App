import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`w-full outline-none placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
}
