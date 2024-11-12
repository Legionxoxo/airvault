"use client";

import SignupStep1 from "@/app/component/auth/SignupStep1";

export default function SignupPage() {
    const handleContinue = (data: any) => {
        console.log("Step 1 Data:", data);
    };

    return <SignupStep1 onContinue={handleContinue} />;
}
