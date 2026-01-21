import AuthLayout from "../components/AuthLayout";
import { useState, useRef } from "react";

export default function OTPVerification({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isOtpComplete = otp.every((d) => d !== "");

  return (
    <AuthLayout>
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        OTP Verification
      </h2>

      {step === 1 && (
        <>
          <div className="mb-10">
            <p className="text-xs text-slate-500 mb-2">Mobile Number*</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 border border-blue-300 rounded-lg px-3 py-2">
                <span>🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter mobile number"
                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <button
              onClick={onBack}
              className="px-8 py-2 rounded-full border border-gray-300 text-sm"
            >
              Back
            </button>
            <button
              onClick={() => setStep(2)}
              className="px-10 py-2 rounded-full bg-blue-600 text-white text-sm"
            >
              Continue
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p className="text-sm text-slate-500 mb-8">
            An OTP has been sent to your mobile number
          </p>

          <div className="flex gap-4 mb-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                value={otp[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                maxLength={1}
                className="w-12 h-12 text-center text-lg border border-blue-300 rounded-lg"
              />
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-8 py-2 rounded-full border border-gray-300 text-sm"
            >
              Back
            </button>
            <button
              onClick={onNext}
              disabled={!isOtpComplete}
              className={`px-10 py-2 rounded-full text-sm ${
                isOtpComplete
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </AuthLayout>
  );
}
