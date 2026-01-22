import { useState } from "react";
import AccountType from "./pages/accountType/AccountType";
import PhoneNumber from "./pages/OTPVerification/PhoneNumber";
import OTPVerification from "./pages/OTPVerification/OTPVerification";
import UserDetails from "./pages/UserDetails/UserDetails";
import Password from "./pages/PasswordCreation/CreatePassword";

export default function App() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => s + 1);

  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {step === 1 && <AccountType onNext={next} />}
      {step === 2 && <PhoneNumber onNext={next} onBack={back} />}
      {step === 3 && <OTPVerification onNext={next} onBack={back} />}
      {step === 4 && <UserDetails onNext={next} onBack={back} />}
      {step === 5 && <Password onNext={next} onBack={back} />}  
    </div>
  );
}