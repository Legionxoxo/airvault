"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CheckProps {
    onCheck: (data: { email: string }) => void;
}

const CheckEmail: React.FC<CheckProps> = ({ onCheck }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Prepare the data to be passed to onReset
        const data = {
            email,
        };

        // Call the onReset function passed as a prop
        onCheck(data);

        // Navigate to the check email route
        router.push("/login/forgetPassword");
    };

    const handleInputChange =
        (
            setter: React.Dispatch<React.SetStateAction<string>>,
            errorSetter: React.Dispatch<React.SetStateAction<string>>
        ) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            errorSetter("");
        };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex items-center justify-center pt-28">
                <Image src="/logo.svg" alt="logo" height={50} width={50} />
            </div>
            <h1 className="text-[#44475B] text-2xl text-center font-semibold mt-3">
                Check your email
            </h1>
            <p className="text-[#8C8FA3] text-base text-center mt-1 leading-8">
                We sent a password reset link to{" "}
                <span className="block font-medium">username@domain.com</span>
            </p>
            {/* Email field */}
            <div className="flex items-center justify-center p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-left font-medium text-[#44475B] mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="aasa"
                            className="w-full p-3 border-2 border-[#C4C7E3] rounded-lg focus:outline-none focus:border-[#298DFF] text-[#44475B] placeholder-[#A3A09F] gray-400"
                            value={email}
                            onChange={handleInputChange(
                                setEmail,
                                setEmailError
                            )}
                            required
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-2">
                                {emailError}
                            </p>
                        )}
                    </div>
                    {/* Button */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#298DFF] py-3 px-6 rounded-lg text-white text-base font-medium"
                        >
                            Open email app
                        </button>
                    </div>
                </form>
            </div>
            {/* Resend link */}
            <div className="text-center mb-3">
                <p className="text-[#8C8FA3] text-sm">
                    Did&apos;t receive email?{" "}
                    <a href="/login/forgetPassword">
                        <span className="text-[#298DFF] font-medium">
                            Click to resend
                        </span>{" "}
                    </a>
                </p>
            </div>
            {/* Link to login */}
            <a href="/login">
                <p className="text-center text-sm text-[#298DFF] font-medium">
                    &lt; {"  "} Back to login
                </p>
            </a>
        </div>
    );
};

export default CheckEmail;
