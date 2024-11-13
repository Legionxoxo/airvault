import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupStep2Props {
    onContinue: (data: {
        email: string;
        password: string;
        confirmPassword: string;
    }) => void;
}

const SignupStep2: React.FC<SignupStep2Props> = ({ onContinue }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate passwords
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Prepare the data to be passed to onContinue
        const data = {
            email,
            password,
            confirmPassword,
        };

        // Call the onContinue function passed as a prop
        onContinue(data);
        router.push("/dashboard/userdashboard"); // userDashboard
    };

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () =>
        setConfirmPasswordVisible(!confirmPasswordVisible);

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            setError("");
            setEmailError("");
        };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md" // Form width
            >
                <div className="text-center mb-6">
                    <img src="/logo.svg" alt="Logo" className="mx-auto mb-4" />
                    <h1 className="text-3xl font-semibold text-gray-800">
                        Sign up
                    </h1>
                </div>

                {/* Email Field */}
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-left text-gray-700 mb-2"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F] placeholder-[#A3A09F] border-gray-300"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-2">
                            {emailError}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="password"
                        className="block text-left text-gray-700 mb-2"
                    >
                        Set your password
                    </label>
                    <div className="relative flex items-center">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 pr-10 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F] placeholder-[#A3A09F] border-gray-300"
                            value={password}
                            onChange={handleInputChange(setPassword)}
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            aria-label="Toggle Password Visibility"
                        >
                            <img
                                src={
                                    passwordVisible
                                        ? "/passwordeyeclose.svg"
                                        : "/passwordeyeopen.svg"
                                }
                                alt="Toggle Password Visibility"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-left text-gray-700 mb-2"
                    >
                        Confirm your password
                    </label>
                    <div className="relative flex items-center">
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="w-full p-3 pr-10 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F] placeholder-[#A3A09F] border-gray-300"
                            value={confirmPassword}
                            onChange={handleInputChange(setConfirmPassword)}
                            required
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            aria-label="Toggle Confirm Password Visibility"
                        >
                            <img
                                src={
                                    confirmPasswordVisible
                                        ? "/passwordeyeclose.svg"
                                        : "/passwordeyeopen.svg"
                                }
                                alt="Toggle Confirm Password Visibility"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-[122px] bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupStep2;
