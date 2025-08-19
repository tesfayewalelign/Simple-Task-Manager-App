import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white p-8 rounded-[28px] shadow-none border-none flex flex-row items-center gap-16 ${className}`}
    >
      {children}
    </div>
  );
}
