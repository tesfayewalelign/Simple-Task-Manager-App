"use client";
import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  id: string;
}

export default function Checkbox({
  checked,
  onCheckedChange,
  className,
  id,
  ...props
}: CheckboxProps) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className={`cursor-pointer ${className}`}
      {...props}
    />
  );
}
