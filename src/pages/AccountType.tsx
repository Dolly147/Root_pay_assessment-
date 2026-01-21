import AuthLayout from "../components/AuthLayout";
import { useState } from "react";

export default function AccountType({ onNext }: { onNext: () => void }) {
  // State to track selected account type
  const [accountType, setAccountType] = useState<"personal" | "business">(
    "personal"
  );

  return (
    <AuthLayout>
      {/* Instruction text */}
      <p className="text-sm text-gray-900 mt-6 mb-6 max-w-md">
        To join us tell us what type of account you are opening
      </p>

      {/* Account type cards */}
      <div className="space-y-4">
        {/* Personal */}
        <button
          onClick={() => setAccountType("personal")}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border transition
            ${
              accountType === "personal"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200"
            }
          `}
        >
          {/* Icon */}
          <svg
            className={`w-5 h-5 ${
              accountType === "personal"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>

          <span className="text-sm font-medium text-gray-900">
            Personal
          </span>

          {/* Check icon */}
          {accountType === "personal" && (
            <span className="ml-auto w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </button>

        {/* Business */}
        <button
          onClick={() => setAccountType("business")}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border transition
            ${
              accountType === "business"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200"
            }
          `}
        >
          <svg
            className={`w-5 h-5 ${
              accountType === "business"
                ? "text-blue-600"
                : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM14 15a4 4 0 00-8 0v2h8v-2z" />
          </svg>

          <span className="text-sm font-medium text-gray-900">
            Business
          </span>

          {accountType === "business" && (
            <span className="ml-auto w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </button>
      </div>

      {/* Bottom actions */}
      <div className="mt-14 flex justify-between items-center">
        {/* Back */}
        <button className="px-8 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700">
          Back
        </button>

        {/* Continue */}
        <button
          onClick={onNext}
          className="px-10 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
