interface SeparatorProps {
  text?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Separator({
  text,
  orientation = "horizontal",
  className,
}: SeparatorProps) {
  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="w-px flex-grow bg-gray-300" />
        {text && <span className="my-2 text-gray-500 rotate-90">{text}</span>}
        <div className="w-px flex-grow bg-gray-300" />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex-grow h-px bg-gray-300" />
      {text && <span className="px-3 text-gray-500">{text}</span>}
      <div className="flex-grow h-px bg-gray-300" />
    </div>
  );
}
