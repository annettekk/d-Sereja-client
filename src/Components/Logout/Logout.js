import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <FiLogOut
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
};

export default LogoutButton;
