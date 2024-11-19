import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'todoListApp/TodoListIndex';

const TodoApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [onHostNavigate, setOnHostNavigate] = useState<
    ((nextPathname: string) => void) | null
  >(null);

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: (nextPathname?: string) => {
          if (nextPathname && location.pathname !== nextPathname) {
            navigate(nextPathname);
          }
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

export default TodoApp;
