import AuthLayout from "../../components/AuthLayout";
import { useRef, useState } from "react";
import "./OTPVerification.css";
import "../styles/actions.css";

export default function OTPVerification({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
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

      <div className="container">
        
        <h2 className="otp-title">OTP Verification</h2>

        <p className="otp-subtext">
          An OTP has been sent to your registered mobile number
        </p>

        <div className="otp-inputs">
          {otp.map((value, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="otp-input"
            />
          ))}
        </div>
      
        <div className="resend-otp">
          Did not receive the OTP?{" "}
          <span className="resend-link">Resend OTP</span>
        </div>

        <div className="auth-actions" style={{ marginTop: "500px" }}>
          <button className="btn-outline" onClick={onBack}>Back</button>

          <button
            className="btn-primary"
            onClick={onNext}
            disabled={!isOtpComplete}
          >
            Continue
          </button>
      </div>
      </div>


   
    </AuthLayout>
  );
}
