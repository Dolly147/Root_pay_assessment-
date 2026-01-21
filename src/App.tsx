import { useState } from "react";
import AccountType from "./pages/AccountType";
import OTPVerification from "./pages/OTPVerification";
import UserDetails from "./pages/UserDetails";
import Password from "./pages/CreatePassword";
import Success from "./pages/Success";

export default function App() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => s + 1);

  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {step === 1 && <AccountType onNext={next} />}
      {step === 2 && <OTPVerification onNext={next} onBack={back} />}
      {step === 3 && <UserDetails onNext={next} onBack={back} />}
      {step === 4 && <Password onNext={next} onBack={back} />}  
      {step === 5 && <Success />} 
    </div>
  );
}