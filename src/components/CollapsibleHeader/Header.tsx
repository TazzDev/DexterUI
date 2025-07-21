import React from "react";
import { useAuthState } from "../../hooks/useAuthState";

// Does header need any props
// Yes it would need if it's user auth state or not
// I think it's best to create a hook that returns the user auth state

const UnauthenticatedHeader: React.FC = () => {
  const classNames =
    "w-100% h-12 bg-blue-400 text-2xl text-white flex justify-center items-center rounded-b-4xl";
  return (
    <div className={classNames}>
      <p>DexView</p>
    </div>
  );
};

const AuthenticatedHeader: React.FC = () => {
  return <>User Auth enabled</>;
};

const Header: React.FC = () => {
  const userAuthState = useAuthState({ isAuthenticated: false });

  if (userAuthState) return <AuthenticatedHeader />;
  else return <UnauthenticatedHeader />;
};

export default Header;
