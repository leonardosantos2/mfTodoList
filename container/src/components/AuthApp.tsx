import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'authApp/AuthIndex';
import { AuthContext } from '../context/AuthContext';

const AuthenticationApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { setUserToken } = useContext(AuthContext);

  const [onHostNavigate, setOnHostNavigate] = useState<
    ((nextPathname: string) => void) | null
  >(null);

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: location.pathname,
        onNavigate: (nextPathname: string) => {
          if (location.pathname !== nextPathname) {
            navigate(nextPathname);
          }
        },
        onSignIn: (newToken: string) => {
          setUserToken(newToken);
        },
      });

      setOnHostNavigate(() => onParentNavigate);
    }
  }, []);

  useEffect(() => {
    if (onHostNavigate) {
      onHostNavigate(location.pathname);
    }
  }, [location.pathname]);

  return <div ref={ref} />;
};

export default AuthenticationApp;
