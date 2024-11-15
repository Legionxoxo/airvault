"use client";
import React, { useState } from "react";
import ResetPassword from "@/app/component/auth/ResetPassword";
import CheckEmail from "@/app/component/auth/CheckEmail";
import NewPassword from "@/app/component/auth/NewPassword";
import Complete from "@/app/component/auth/Complete";

interface ResetData {
    email: string;
}

const Page: React.FC = () => {
    // State to track the current step in the flow
    const [step, setStep] = useState<
        "reset" | "checkEmail" | "newPassword" | "complete"
    >("reset");

    const handleContinue = (data: ResetData) => {
        console.log("Step 1 Data:", data);
        setStep("checkEmail"); // Move to the next step (CheckEmail)
    };

    const handleEmailVerified = () => {
        setStep("newPassword"); // Move to the NewPassword step
    };

    const handlePasswordReset = () => {
        setStep("complete"); // Move to the Complete step
    };

    return (
        <div>
            {step === "reset" && <ResetPassword onReset={handleContinue} />}
            {step === "checkEmail" && (
                <CheckEmail onCheck={handleEmailVerified} />
            )}
            {step === "newPassword" && (
                <NewPassword onPasswordReset={handlePasswordReset} />
            )}
            {step === "complete" && <Complete />}
        </div>
    );
};

export default Page;
