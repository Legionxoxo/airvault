"use client";

import SignupStep1 from "@/app/component/auth/SignupStep1";

interface Step1Data {
    username: string;
    firstName: string;
    lastName: string;
}

export default function SignupPage() {
    const handleContinue = (data: Step1Data) => {
        console.log("Step 1 Data:", data);
    };

    return <SignupStep1 onContinue={handleContinue} />;
}
