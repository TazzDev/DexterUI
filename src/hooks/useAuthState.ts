import { useState } from "react";

export const useAuthState = (userObj: { isAuthenticated: boolean }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  if (userObj?.isAuthenticated) {
    setUserAuthenticated(!userAuthenticated);
  }
  return userAuthenticated;
};
