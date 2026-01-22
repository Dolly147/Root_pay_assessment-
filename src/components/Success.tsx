type SuccessProps = {
  onClose: () => void;
  accountType: string;
  email: string;
  name: string;
  phone: string;
};

import "./Success.css";

export default function Success({
  onClose,
  accountType,
  email,
  name,
  phone,
}: SuccessProps) {
  return (
    <div className="success-overlay">
      <div className="success-modal">
        {/* Icon */}
        <div className="success-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              fill="#003ddb"
            />
          </svg>
        </div>

        <h2 className="success-title">You’re all set!</h2>

        <p className="success-subtitle">
          Here’s a quick summary of your account details
        </p>

        {/* Summary */}
        <div className="success-summary">
          <Row label="Account Type" value={accountType} />
          <Divider />
          <Row label="Email" value={email} />
          <Divider />
          <Row label="Name" value={name} />
          <Divider />
          <Row label="Mobile Number" value={phone} />
        </div>

        <div className="success-note">
          <span className="success-check">✔</span>
          Your account is secured with bank-grade security
        </div>

        <button className="success-btn" onClick={onClose}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

/* Helpers */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="success-row">
      <span className="success-label">{label}</span>
      <span className="success-value">{value}</span>
    </div>
  );
}

function Divider() {
  return <div className="success-divider" />;
}
