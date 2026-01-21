import AuthLayout from "../components/AuthLayout";
import { useState } from "react";

export default function UserDetails({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <AuthLayout>
      {/* Title */}
      <h2 className="text-lg font-semibold text-slate-900 mt-6">
        What is your name?
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-slate-500 mt-2 mb-8">
        Please enter your full name
      </p>

      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">
            First Name
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            className="
              w-full
              h-[44px]
              px-4
              text-sm
              border
              border-slate-300
              rounded-lg
              focus:border-blue-600
              focus:outline-none
            "
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">
            Last Name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            className="
              w-full
              h-[44px]
              px-4
              text-sm
              border
              border-slate-300
              rounded-lg
              focus:border-blue-600
              focus:outline-none
            "
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-16">
        <button
          onClick={onBack}
          className="
            px-8
            py-2
            rounded-full
            border
            border-slate-300
            text-sm
            text-slate-700
            hover:bg-slate-50
          "
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-10 py-2 rounded-full text-sm font-medium transition ${
            isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
