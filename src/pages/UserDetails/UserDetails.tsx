import AuthLayout from "../../components/AuthLayout";
import { useState } from "react";
import "./UserDetails.css";
import "../styles/actions.css"
export default function UserDetails({
  onNext,
  onBack,
  onSubmitName
}: {
  onNext: () => void;
  onBack: () => void;
  onSubmitName: (firstName: string, lastName: string) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isFormValid =
    firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <AuthLayout>

      <div className="container">
        <h2 className="user-title">What is your name?</h2>

        <div className="user-inputs">
          <div>
            <label className="user-label">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="user-input"
            />
          </div>

          <div>
            <label className="user-label">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="user-input"
            />
          </div>
        </div>
      </div>

      <div className="auth-actions" style={{ marginTop: "480px" }}>
        <button className="btn-outline" onClick={onBack}>
          Back
        </button>

        <button
          className="btn-primary"
          onClick={() => {
            onNext();
          }}
          disabled={!isFormValid}
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
