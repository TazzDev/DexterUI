import React from "react";
import Card from "../../components/Card/Card";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  // Stores the username input
  const [username, setUsername] = React.useState<string>("");

  const [password, setPassword] = React.useState<string>("");

  const { loginWithRedirect } = useAuth0();

  // Handles username validation
  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === undefined || e.target.value.length > 0) return;
    setUsername(e.target.value);
  };

  // Handle password validation
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === undefined || e.target.value.length < 8) return;
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <Card>
        Login
        <label>Username:</label>
        <input value={username} onChange={handleUsernameInput}></input>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
        ></input>
      </Card>
      <button onClick={()=>{
        loginWithRedirect();        
      }}>Login</button>
    </div>
  );
};

export default Login;
