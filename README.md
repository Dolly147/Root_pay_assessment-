📌 Authentication Flow – Frontend Implementation

Overview
  This project implements a multi-step authentication flow based on a provided Figma design. The flow includes account type selection, phone number input, OTP verification, user details, password creation, and a success confirmation modal.
  The primary focus of this implementation is UI accuracy, layout structure, and clean state management, rather than backend integration.

🛠 Tech Stack
  React + TypeScript – Component-based architecture with type safety
  CSS (Vanilla) – Custom CSS for pixel-accurate UI (no Tailwind / UI libraries)
  Vite – Fast development and build tool

🧠 Design & Architecture Decisions
- Single Source of Truth
  All user-entered data (account type, phone number, name, email) is lifted to a common parent (AuthFlow) to ensure consistent data flow across screens and into the success modal.
- Reusable Layout
  AuthLayout is used across all screens to maintain consistent structure, spacing, and alignment.
- Consistent Design System
  Uniform input height, borders, and typography
  Shared action buttons (Back / Continue) via a common CSS file
  Flexbox-based layout with bottom-aligned actions (no absolute positioning or margin hacks)
- Separation of Concerns
  Each screen manages only its local UI state, while shared data is passed upward via callbacks.

⚠️ Current Limitation (OTP Handling)
  OTP validation is not implemented
  Any OTP value is currently accepted to proceed
  This is intentional, as backend / SMS integration is out of scope for this assignment

👉 OTP logic can be easily extended later by:

  Adding API-based verification
  Enforcing OTP length and value validation
  Auto-submit and retry handling

🚀 Possible Enhancements

  Backend API integration for OTP & authentication
  Form validation using a library like Zod / Yup
  Accessibility improvements (ARIA labels, keyboard navigation)
  Persisting auth state using Context API or localStorage
  Mobile responsiveness refinements

✅ Status

 UI flow complete
 Data flow implemented correctly
 Success summary reflects user input
 OTP logic pending (by design)
