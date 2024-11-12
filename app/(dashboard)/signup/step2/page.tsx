"use client";

import SignupStep2 from "@/app/component/auth/SignupStep2";

export default function SignupStep2Page() {
    const handleSignup = (data: any) => {
        console.log("Step 2 Data:", data);
    };

    return <SignupStep2 onContinue={handleSignup} />;
}
