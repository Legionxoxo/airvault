"use client";

import SignupStep2 from "@/app/component/auth/SignupStep2";

interface Step2Data {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignupStep2Page() {
    const handleSignup = (data: Step2Data) => {
        console.log("Step 2 Data:", data);
    };

    return <SignupStep2 onContinue={handleSignup} />;
}
