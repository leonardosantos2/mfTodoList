import { useEffect, useRef } from 'react';

import { mount } from 'todoListApp/TodoListIndex';

const TodoApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default TodoApp;
