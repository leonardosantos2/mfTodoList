import { useEffect, useRef } from 'react';

import { mount } from 'authApp/AuthIndex';

const AuthenticationApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current, {});
    }
  }, []);

  return <div ref={ref} />;
};

export default AuthenticationApp;
