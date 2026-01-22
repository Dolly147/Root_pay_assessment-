import AuthLayout from "../../components/AuthLayout";
import { useState } from "react";
import "./AccountType.css";
import "../styles/actions.css";

export default function AccountType({ onNext }: { onNext: () => void }) {
  const [accountType, setAccountType] = useState<"personal" | "business">(
    "personal"
  );

  return (
    <AuthLayout>
      <p className="account-instruction">
        To join us tell us 
        <span> what type of account</span> you are opening
      </p>

      <div className="account-options">

        <button
          className={`account-card ${
            accountType === "personal" ? "active" : ""
          }`}
          onClick={() => setAccountType("personal")}
        >
          <div className="card-left">
            <img className="card-icon" src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
            <span className="card-text">Personal</span>
          </div>

          {accountType === "personal" && (
            <span className="check-circle">✓</span>
          )}
        </button>

        {/* Business */}
        <button
          className={`account-card ${
            accountType === "business" ? "active" : ""
          }`}
          onClick={() => setAccountType("business")}
        >
          <div className="card-left">
            <img  className="card-icon" src="https://cdn-icons-png.flaticon.com/128/9133/9133123.png" alt="" />
            <span className="card-text">Business</span>
          </div>

          {accountType === "business" && (
            <span className="check-circle">✓</span>
          )}
        </button>
      </div>

      <div className="auth-actions">
        <button className="btn-outline">Back</button>
        <button className="btn-primary" onClick={onNext}>Continue</button>
      </div>

    </AuthLayout>
  );
}
