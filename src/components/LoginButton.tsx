import { UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    if (isLoggedIn == false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  //Not Signed In
  if (isLoggedIn == false) {
    return (
      <div className="flex flex-1 justify-end text-white pr-4">
        <button>
          <p onClick={handleLogIn}>Log In</p>
        </button>
      </div>
    );

    //Signed in
  } else {
    return (
      <div className="flex flex-1 justify-end text-white pr-4">
        <div className="flex grow-0 flex-row justify-end items-center">
          <div>
            <UserIcon className="size-12" />
          </div>
          <button>
            <p onClick={handleLogIn}>Log Out</p>
          </button>
        </div>
      </div>
    );
  }
}
