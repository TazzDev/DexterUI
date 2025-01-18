import React, { useState } from "react";
import { useStore } from "@/store";
import { useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await login(username, password);
    if (!error) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate('/');
        });
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="flex flex-col p-8 bg-white rounded-xl shadow-lg animate-entry"
      >
        <h1 className="text-lg font-bold mb-6 text-center text-gray-800">
          Sign in to use Dexter
        </h1>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-64 mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-64 mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-64 p-3 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-64 p-3 bg-gray-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

const styles = `
@keyframes entry {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-entry {
  animation: entry 0.4s ease-out;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LoginPage;
