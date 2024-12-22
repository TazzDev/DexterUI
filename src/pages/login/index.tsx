"use client";
import ToastMessage from "@/components/toast";
import { useBoundStore } from "@/store";
import { Routes } from "@/utils/navigation";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation";
import React from "react";
import { isEmpty, isStrongPassword } from "validator";
import isEmail from "validator/lib/isEmail";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userDetails, setUserDetails] = React.useState<any>();
  const [session, setSession] = React.useState<any>();
  const [loginError, setLoginError] = React.useState<any>();
  const [showSupportScreen, setShowSupportScreen] = React.useState(false);
  const [validationToast, setValidationToast] = React.useState({
    show: false,
    message: "",
  });

  const state = useBoundStore((state) => state);
  console.log(state);

  const validateCredentials = (email: string, password: string) => {
    const flags = { email: false, password: false };
    if (isEmail(email)) {
      flags.email = true;
    }
    if (!isEmpty(password)) {
      flags.password = true;
    }
    if (!flags.email && !flags.password) {
      setValidationToast({
        show: true,
        message: "Please enter a valid email and password",
      });
      return false;
    }
    if (!flags.email) {
      setValidationToast({ show: true, message: "Please enter a valid email" });
      return false;
    }
    if (!flags.password) {
      setValidationToast({
        show: true,
        message: "Please enter a valid password",
      });
      return false;
    }
    return true;
  };

  const loginUser = async () => {
    setLoginError(null);
    if (validateCredentials(email, password)) {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({ email, password });
      setUserDetails(user);
      setSession(session);
      setLoginError(error);
      if (!error) {
        router.push(Routes.home);
      }
    }
  };

  console.log(userDetails, session, loginError);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-radial from-teal-500 via-gray-300 to-white bg-[length:300%_300%] animate-moveGradient">
      {loginError && (
        <ToastMessage
          message={`You've entered an invalid username or password. Please check your credentials!`}
        />
      )}
      {showSupportScreen && (
        <ToastMessage
          message={"Please contact your admin for further support"}
          toastCloseCallback={() => setShowSupportScreen(false)}
        />
      )}
      {validationToast.show && (
        <ToastMessage
          message={validationToast.message}
          toastCloseCallback={() =>
            setValidationToast({ show: false, message: "" })
          }
        />
      )}
      <div className="flex flex-col items-stretch gap-5 bg-teal-800 p-10 rounded-lg w-96 mx-auto shadow-2xl drop-shadow-2xl">
        <div className="text-center text-white">Login to view dashboard</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-white p-2 rounded shadow-md text-black"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-white p-2 rounded shadow-md text-black"
        />
        <button
          className="border border-white p-2 rounded hover:bg-teal-600 shadow-md text-white"
          onClick={() => loginUser()}
        >
          Login
        </button>
        <button
          className="rounded text-white hover:underline text-sm"
          onClick={() => setShowSupportScreen(true)}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
