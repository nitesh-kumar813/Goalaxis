import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center px-4">

        <div className="max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 px-8">
            <h1 className="text-xl font-bold flex  justify-center items-center">
              Goal<span className="text-[#F83002]">Axis</span>
            </h1>
            <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22.5 12c0-5.8-4.7-10.5-10.5-10.5S1.5 6.2 1.5 12c0 5.2 3.8 9.5 8.8 10.4v-7.4H7.9v-3h2.4V9.8c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4v1.8h2.6l-.4 3h-2.2v7.4c5-.9 8.8-5.2 8.8-10.4z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="X"
            >
              <svg
                className="w-4 h-4 text-black dark:text-white"
                fill="currentColor"
                viewBox="0 0 1200 1227"
              >
                <path d="M718.8 548.2L1149 0H1046.3L673.2 471.6 355.6 0H0L454.1 672.3 0 1227h102.6L504.5 716.1 844.4 1227H1200L718.8 548.2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4 text-blue-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.026-3.037-1.851-3.037-1.855 0-2.138 1.446-2.138 2.94v5.666H9.148V9.755h3.446v1.465h.05c.479-.91 1.652-1.872 3.4-1.872 3.633 0 4.307 2.39 4.307 5.498v5.606zM5.337 8.289c-1.105 0-2-.894-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.105-.896 2-2 2zM7.119 20.452H3.553V9.755h3.566v10.697z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
