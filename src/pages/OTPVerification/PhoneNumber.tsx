import AuthLayout from "../../components/AuthLayout";
import CountryCodeDropdown from "../../components/CountycodeDropDOwn";
import { useState } from "react";
import "./PhoneNumber.css";
import "../styles/actions.css";

type Country = {
  name: string;
  code: string;
  flag: string;
};

export default function PhoneNumber({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [phone, setPhone] = useState("");

  const [country, setCountry] = useState<Country>({
    name: "India",
    code: "+91",
    flag: "🇮🇳",
  });

  return (
    <AuthLayout>
      <div className="container">
        <h2 className="phone-title">OTP Verification</h2>

        <label className="phone-label">Mobile Number <span>*</span></label>

        <div className="phone-input-row">
          <CountryCodeDropdown
            value={country}
            onChange={setCountry}
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter mobile number"
            className="phone-input"
          />
        </div>
      </div>

      <div className="auth-actions" style={{ marginTop: "550px" }}>
        <button className="btn-outline" onClick={onBack}>
          Back
        </button>

        <button
          className="btn-primary"
          onClick={onNext}
          disabled={phone.length !== 10}
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
