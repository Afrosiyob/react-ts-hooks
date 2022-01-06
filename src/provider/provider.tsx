import { useState } from "react";
import { AuthContext, UserType } from "../context/context";

export const AuthProvider = (children: any) => {
  const [user, setUser] = useState<UserType>({
    name: "Jane",
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
