import { useState } from "react";
import AccountType from "./pages/accountType/AccountType";
import PhoneNumber from "./pages/OTPVerification/PhoneNumber";
import OTPVerification from "./pages/OTPVerification/OTPVerification";
import UserDetails from "./pages/UserDetails/UserDetails";
import Password from "./pages/PasswordCreation/CreatePassword";

export default function App() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {step === 1 && <AccountType onNext={next} onSubmitAccountType={setAccountType} />}
      {step === 2 && <PhoneNumber onNext={next} onBack={back} onSubmitPhone={setPhone} />}
      {step === 3 && <OTPVerification onNext={next} onBack={back} />}
      {step === 4 && <UserDetails onNext={next} onBack={back} onSubmitName={setName} />}
      {step === 5 && <Password onNext={next} onBack={back} accountType={accountType} phone={phone} name={name} email="example@gmail.com" />}  
    </div>
  );
}