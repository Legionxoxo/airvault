"use client";

import Login from "@/app/component/auth/Login";

export default function LoginPage() {
    const handleContinue = (data: any) => {
        console.log("Step 1 Data:", data);
    };

    return <Login onContinue={handleContinue} />;
}
