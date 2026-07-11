import Link from "next/link";
import { X } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050A18] text-white p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* OOPS! label with X icon */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1E2A4A] mx-auto">
          <X className="w-4 h-4 text-red-500 mr-2" />
          <span className="font-medium">OOPS!</span>
        </div>

        {/* 404 text */}
        <h1 className="text-[180px] font-bold leading-none bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-transparent bg-clip-text">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl font-semibold tracking-wide">
          OOPS, PAGE NOT FOUND!
        </h2>

        {/* Description text */}
        <p className="text-gray-400 max-w-sm mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back to home button */}
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-medium transition-transform hover:scale-105"
          >
            back to home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
