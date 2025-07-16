import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "link";
  className?: string;
}

export default function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  if (variant === "link") {
    return (
      <button
        className={` underline ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`bg-[#ec4c7d] hover:bg-[#d43e6b]  text-white font-semibold rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
