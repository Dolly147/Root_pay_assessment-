import { useState } from "react";
import AccountType from "./accountType/AccountType";
import PhoneNumber from "./OTPVerification/PhoneNumber";
import UserDetails from "./UserDetails/UserDetails";
import Password from "./PasswordCreation/CreatePassword";

export default function AuthFlow() {
  const [step, setStep] = useState(1);

  const [accountType, setAccountType] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      {step === 1 && (
        <AccountType
          onNext={() => setStep(2)}
          onSubmitAccountType={setAccountType}
        />
      )}

      {step === 2 && (
        <PhoneNumber
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onSubmitPhone={setPhone}
        />
      )}

      {step === 3 && (
        <UserDetails
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onSubmitName={setName}
        />
      )}

      {step === 4 && (
        <Password
          onNext={() => console.log("Done")}
          onBack={() => setStep(3)}
          accountType={accountType}
          phone={phone}
          name={name}
          email="example@gmail.com"
        />
      )}
    </>
  );
}
