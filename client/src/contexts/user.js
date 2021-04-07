import { createContext } from "react";

export const UserContext = createContext({
  user: null,
  isUserLoaded: false,
});
