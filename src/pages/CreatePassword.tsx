import AuthLayout from "../components/AuthLayout";
import { useState } from "react";

export default function Password({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValid =
    password.length >= 6 && password === confirmPassword;

  return (
    <AuthLayout>

      {/* Title */}
      <h2 className="mt-6 text-[16px] font-semibold text-[#0F172A]">
        Create Password for your account
      </h2>

      {/* Form */}
      <div className="mt-8 space-y-6">

        {/* Password */}
        <div>
          <label className="block text-[12px] text-[#64748B] mb-1">
            Enter new password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="
                w-full
                h-[44px]
                px-4
                pr-10
                text-[14px]
                placeholder:text-[#CBD5E1]
                border
                border-[#9DBDFF]
                rounded-[8px]
                focus:outline-none
                focus:border-[#2563EB]
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[11px] text-[#2563EB]"
            >
              👁️
            </button>
          </div>

          <p className="mt-1 text-[11px] text-[#94A3B8]">
            Must be atleast 6 characters
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-[12px] text-[#64748B] mb-1">
            Confirm password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="
                w-full
                h-[44px]
                px-4
                pr-10
                text-[14px]
                placeholder:text-[#CBD5E1]
                border
                border-[#9DBDFF]
                rounded-[8px]
                focus:outline-none
                focus:border-[#2563EB]
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-[11px] text-[#2563EB]"
            >
              👁️
            </button>
          </div>

          <p className="mt-1 text-[11px] text-[#94A3B8]">
            Both passwords must match
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-16 flex justify-between items-center">
        <button
          onClick={onBack}
          className="
            h-[36px]
            px-10
            rounded-full
            border
            border-[#CBD5E1]
            text-[13px]
            text-[#2563EB]
          "
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`
            h-[36px]
            px-12
            rounded-full
            text-[13px]
            font-medium
            ${
              isValid
                ? "bg-[#2563EB] text-white"
                : "bg-[#E2E8F0] text-[#94A3B8]"
            }
          `}
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
