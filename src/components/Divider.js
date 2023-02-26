import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Divider() {
  return (
    <>
      <div className="relative py-10">
        {/* Gradient Divider */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-blue via-blue to-gold"></div>
        </div>
        {/* Bracket Icon */}
        <div className="relative flex justify-center">
          <CodeBracketIcon className="inline-flex items-center rounded-full w-6 h-6 bg-blue to-silver text-gold" />
        </div>
      </div>
    </>
  );
}
