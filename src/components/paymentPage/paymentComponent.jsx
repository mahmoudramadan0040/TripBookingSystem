"use client";

import { useState } from "react";

export default function PaymentComponent() {
  const [status, setStatus] = useState(true);
  const svgSuccessJSX = (
    <svg
      class="w-12 h-12 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
  const svgFaildJSX = (
    <svg
      class="w-12 h-12 text-red-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl">
          <div className="text-center">
            <div
              className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full ${
                status
                  ? "bg-green-100 dark:bg-green-700"
                  : "bg-red-100 dark:bg-red-700"
              }`}
            >
              {status ? svgSuccessJSX : svgFaildJSX}
            </div>
            <h1
              className={`!text-4xl !font-extrabold ${
                status
                  ? "!text-green-700 !dark:text-green-400"
                  : "!text-red-700 !dark:text-red-400"
              }`}
            >
              {status ? "Payment Successful!" : "Payment Failed!"}
            </h1>
            <p className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-300">
              Thank you for choosing{" "}
              <span className="font-bold text-indigo-700 dark:text-indigo-400">
                Travello!
              </span>{" "}
              Your booking is now complete. We’re excited to make your journey
              unforgettable!
            </p>
            <p className="mt-6 text-xl text-blue-600 dark:text-blue-400">
              <span className="font-bold text-indigo-700 dark:text-indigo-400">
                You can see your booked Tours on your{" "}
                <a href="/profile" className=" !underline ">
                  Profile.
                </a>
              </span>{" "}
            </p>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
              If you have any questions or need further assistance, feel free to
              contact us at:{" "}
              <a
                href="mailto:admin@eliteai.tools"
                className="font-medium text-indigo-600 dark:text-indigo-400 !underline"
              >
                admin@eliteai.tools
              </a>{" "}
              or{" "}
              <a
                href="contactUs"
                className="font-medium text-indigo-600 dark:text-indigo-400 !underline"
              >
                Contact Us Methods
              </a>
            </p>
          </div>
          <div className="mt-8 text-center p-2 ">
            <a
              href="/home"
              className="inline-block  px-16 py-8 text-lg font-medium text-white transition-transform rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
    //     <div>
    //       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    //     <div
    //         className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
    //         {/* Success Icon */}
    //         <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
    //             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    //             </svg>
    //         </div>

    //         {/* Main Content */}
    //         <h1 className="mb-6 text-4xl font-extrabold text-green-600">
    //             Payment Successful!
    //         </h1>

    //         <p className="mb-8 text-xl text-gray-700">
    //             Thank you for your purchase.
    //         </p>

    //         <div className="p-6 mb-8 rounded-lg bg-blue-50">
    //             <p className="text-lg font-medium text-blue-700">
    //                 Your tool <span className="font-bold">"http://example.com"</span> will be listed shortly.
    //             </p>
    //         </div>
    //         {/* Contact Information */}
    //         <div className="pt-8 mt-8 border-t border-gray-100">
    //             <p className="text-lg text-gray-700">
    //                 Have questions? Contact us at:
    //             </p>
    //             <a href="mailto:admin@eliteai.tools"
    //                 className="inline-block mt-2 text-xl font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800">
    //                 admin@eliteai.tools
    //             </a>
    //         </div>

    //         {/* Back to Home Button */}
    //         <div className="mt-12">
    //             <a href="http://127.0.0.1:8000"
    //                 className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700">
    //                 Return to Dashboard
    //             </a>
    //         </div>
    //     </div>
    // </div>
    //     </div>
  );
}
