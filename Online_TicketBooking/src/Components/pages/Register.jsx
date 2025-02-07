import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md mb-3"
          autoComplete="name"  // ✅ Added autocomplete
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md mb-3"
          autoComplete="email"  // ✅ Added autocomplete
        />

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md mb-3"
          autoComplete="new-password"  // ✅ Added autocomplete
        />

        <button className="w-full bg-green-500 text-white p-2 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
