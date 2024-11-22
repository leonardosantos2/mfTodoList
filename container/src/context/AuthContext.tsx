import { createContext, useState } from 'react';

export type AuthContextProps = {
  userToken: string | null;
  setUserToken: (token: string | null) => void;
};

export const AuthContext = createContext<AuthContextProps>({
  userToken: null,
  setUserToken: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [userToken, setUserToken] = useState<string | null>(
    sessionStorage.getItem('userToken'),
  );

  const updateToken = (newToken: string | null) => {
    if (!newToken) {
      sessionStorage.removeItem('userToken');
    } else {
      sessionStorage.setItem('userToken', newToken);
    }

    setUserToken(newToken);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ userToken, setUserToken: updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
