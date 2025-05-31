// app/not-found.tsx or pages/404.tsx (depending on your setup)
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-between bg-white p-8 sm:p-16 h-screen">
        <div></div>
        <div className="self-center">
          <div className="mb-8">
            <img
              src="/assets/images/logo/logo.png"
              alt="logo"
              className="changeLogo"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="!text-indigo-600 hover:!underline text-md font-medium"
            >
              ← Back to home
            </Link>
          </div>
        </div>

        <div className="text-md text-gray-500 flex gap-4 self-center">
          <a href="#" className="hover:!underline">
            Contact support
          </a>
          <span>·</span>
          <a href="#" className="hover:!underline">
            Status
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden lg:block h-screen">
        <img
          className="h-screen w-full object-fit"
          src="/assets/images/404.avif"
          alt="404 Desert"
        />
      </div>
    </div>
  );
}
