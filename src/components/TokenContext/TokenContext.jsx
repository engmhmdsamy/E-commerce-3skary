import { createContext, useState } from 'react';

export let UserContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [cartCount, setCartCount] = useState(0); // أضف cartCount و setCartCount

  return (
    <UserContext.Provider value={{ userToken, setUserToken, cartCount, setCartCount }}>
      {props.children}
    </UserContext.Provider>
  );
}
