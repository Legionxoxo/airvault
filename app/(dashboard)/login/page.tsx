"use client";
import Login from "@/app/component/auth/Login";
interface LoginData {
    email: string;
    password: string;
}
export default function LoginPage() {
    const handleContinue = (data: LoginData) => {
        console.log("Step 1 Data:", data);
    };

    return <Login onLogin={handleContinue} />;
}
