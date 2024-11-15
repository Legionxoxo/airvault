import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PasswordProps {
    onPasswordReset: (data: {
        password: string;
        confirmPassword: string;
    }) => void;
}

const NewPassword: React.FC<PasswordProps> = ({ onPasswordReset }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate passwords
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Prepare the data to be passed
        const data = {
            password,
            confirmPassword,
        };

        // Call the function passed as a prop
        onPasswordReset(data);
        router.push("/login/forgetPassword"); // navigate to next step
    };

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () =>
        setConfirmPasswordVisible(!confirmPasswordVisible);

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            setError("");
        };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md" // Form width
                >
                    <div className="text-center mb-16 flex items-center justify-center">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            height={50}
                            width={50}
                        />
                        <h1 className="text-3xl font-semibold text-gray-800"></h1>
                    </div>

                    {/* Password Field */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="password"
                            className="block text-left text-gray-700 mb-2"
                        >
                            New Password
                        </label>
                        <div className="relative flex items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-3 pr-10 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#44475B] placeholder-[#A3A09F] border-gray-300"
                                value={password}
                                onChange={handleInputChange(setPassword)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                aria-label="Toggle Password Visibility"
                                tabIndex={-1}
                            >
                                <Image
                                    src={
                                        passwordVisible
                                            ? "/passwordeyeclose.svg"
                                            : "/passwordeyeopen.svg"
                                    }
                                    height={6}
                                    width={6}
                                    alt="Toggle Password Visibility"
                                   
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
                                type={
                                    confirmPasswordVisible ? "text" : "password"
                                }
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                className="w-full p-3 pr-10 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#44475B] placeholder-[#A3A09F] border-gray-300"
                                value={confirmPassword}
                                onChange={handleInputChange(setConfirmPassword)}
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                aria-label="Toggle Confirm Password Visibility"
                                tabIndex={-1}
                            >
                                <Image
                                    src={
                                        confirmPasswordVisible
                                            ? "/passwordeyeclose.svg"
                                            : "/passwordeyeopen.svg"
                                    }
                                    alt="Toggle Confirm Password Visibility"
                                    height={6}
                                    width={6}
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
                            className=" focus:outline-none bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                        >
                            Reset Password
                        </button>
                    </div>
                    <div className="mt-3">
                        <a href="/login">
                            <p className="text-center text-sm text-[#298DFF] font-medium">
                                &lt; {"  "} Back to login
                            </p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
