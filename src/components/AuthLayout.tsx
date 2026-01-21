// Reusable layout for all auth screens
import React from "react";
import "./AuthLayout.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-card">

      {/* Left Section */}
      <div className="auth-left">
        <div className="heading">
          <p className="sub1">Let's get started</p>
          <h1>Create your account</h1>
          <p className="sub2">Follow the steps to create your account</p>
        </div>

        <div className="img-section">
          <img src="/src/assets/bg_image.png" alt="Illustration" />
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="form-content">
          {children}
        </div>
      </div>

    </div>
  );
}
