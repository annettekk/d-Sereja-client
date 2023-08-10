import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <span onClick={() => loginWithRedirect()}>Login <FiLogIn onClick={() => loginWithRedirect()}/></span>
};

export default LoginButton;
