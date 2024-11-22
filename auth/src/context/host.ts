import { createContext } from 'react';

type HostContextProps = {
  onSignIn: (newUserToken: string) => void;
};

export const HostContext = createContext<HostContextProps>({
  onSignIn: () => {},
});
