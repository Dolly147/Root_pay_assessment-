import { useState } from "react";
import AuthLayout from "../components/AuthLayout";

export default function Success() {
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null;

  return (
    <AuthLayout>
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="w-[420px] bg-white rounded-2xl shadow-xl px-8 py-10 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[20px] font-semibold text-slate-900">
          You’re all set!
        </h2>

        <p className="mt-1 text-[13px] text-slate-500">
          Here’s a quick summary of your account details
        </p>

        {/* Summary Box */}
        <div className="mt-6 bg-slate-50 rounded-xl px-5 py-4 text-left text-[13px]">
          
          <div className="flex justify-between">
            <span className="text-slate-500">Account Type</span>
            <span className="font-medium text-slate-900">Personal</span>
          </div>

          <div className="my-2 h-px bg-slate-200"></div>

          <div className="flex justify-between">
            <span className="text-slate-500">Email</span>
            <span className="font-medium text-slate-900">
              jo****@example.com
            </span>
          </div>

          <div className="my-2 h-px bg-slate-200"></div>

          <div className="flex justify-between">
            <span className="text-slate-500">Name</span>
            <span className="font-medium text-slate-900">John Doe</span>
          </div>

          <div className="my-2 h-px bg-slate-200"></div>

          <div className="flex justify-between">
            <span className="text-slate-500">Mobile Number</span>
            <span className="font-medium text-slate-900">
              97******90
            </span>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <span className="text-green-600">✔</span>
          Your account is secured with bank-grade security
        </div>

        {/* Button */}
        <button
          onClick={() => setShowModal(false)}
          className="
            mt-6
            w-full
            h-[40px]
            rounded-full
            bg-blue-600
            text-white
            text-[13px]
            font-medium
            hover:bg-blue-700
            transition
          "
        >
          Go to Dashboard
        </button>
      </div>
    </div>
    </AuthLayout>
  );
}

