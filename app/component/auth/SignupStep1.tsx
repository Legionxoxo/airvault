import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupStep1Props {
    onContinue: (data: {
        username: string;
        firstName: string;
        lastName: string;
    }) => void;
}

const SignupStep1: React.FC<SignupStep1Props> = ({ onContinue }) => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (username === "abcxyz") {
            setError("Username already exists");
            return;
        }

        if (!username || !firstName || !lastName) {
            setError("Please fill in all fields");
            return;
        }

        const data = {
            username,
            firstName,
            lastName,
        };
        onContinue(data);

        //successful navigation
        router.push("/signup/step2");
    };

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            setError("");
        };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg w-full max-w-lg"
            >
                <div className="text-center mb-6">
                    <img src="/logo.svg" alt="Logo" className="mx-auto mb-4" />
                    <h1 className="text-3xl font-semibold text-gray-800">
                        Sign up
                    </h1>
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block text-base text-left text-gray-700 mb-2"
                    >
                        Set your username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="w-full p-3 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F] placeholder-[#A3A09F] border-gray-300"
                        value={username}
                        onChange={handleInputChange(setUsername)}
                        required
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block text-left text-gray-700 mb-2">
                        Tell us your name
                    </label>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="w-1/2 p-3 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F] placeholder-[#A3A09F] border-gray-300"
                            value={firstName}
                            onChange={handleInputChange(setFirstName)}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="w-1/2 p-3 border-2 border-solid rounded-lg focus:outline-none focus:border-[#298DFF] text-[#A3A09F]  placeholder-[#A3A09F] border-[#A3A09F] "
                            value={lastName}
                            onChange={handleInputChange(setLastName)}
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="w-[122px] bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                        disabled={!username || !firstName || !lastName}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupStep1;
