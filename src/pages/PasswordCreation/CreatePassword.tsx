import AuthLayout from "../../components/AuthLayout";
import Success from "../../components/Success";
import { useState } from "react";
import "../styles/actions.css"
import "./CreatePassword.css";
import "../styles/actions.css";
import UserDetails from "../UserDetails/UserDetails";
import PhoneNumber
 from "../OTPVerification/PhoneNumber";

export default function Password({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [showSuccess, setShowSuccess] = useState(false);

  const accountType = "";
  const email = ""  ;
  const name = "";
  const phone = "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const isValid =
    password.length >= 6 && password === confirmPassword;

  return (
    <AuthLayout>

      <div className="container">

        <h2 className="password-title">
          Create Password for your account
        </h2>

        <div className="password-form">
          {/* Password */}
          <div>
            <label className="password-label">
              Enter new password
            </label>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-btn"
              >
                👁️
              </button>
            </div>

            <p className="password-hint">
              Must be at least 6 characters
            </p>
          </div>

          {/* Confirm */}
          <div>
            <label className="password-label">
              Confirm password
            </label>

            <div className="password-field">
              <input
                type={
                  showConfirmPassword ? "text" : "password"
                }
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm password"
                className="password-input"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="eye-btn"
              >
                👁️
              </button>
            </div>
            <p className="password-hint">
              Both passwords must match
            </p>
          </div>
        </div>
            <div className="auth-actions " style={{
              marginTop: "380px"
            }}>
        <button className="btn-outline" onClick={onBack}>
          Back
        </button>

        <button
          className="btn-primary"
          disabled={!isValid}
          onClick={() => setShowSuccess(true)}
        >
          Continue
        </button>
      </div>

      </div>

  
      {showSuccess && (
        <Success
          onClose={() => {
            setShowSuccess(false);
            onNext();
          }}
          accountType={accountType}
          email={email}
          name={name}
          phone={phone}
        />
      )}
    </AuthLayout>
  );
}
