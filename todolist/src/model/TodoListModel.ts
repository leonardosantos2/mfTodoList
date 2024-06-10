import { useState } from 'react';
import { Todo } from '../types/Todo';
import { generateId } from '../utils/generateId';

const useTodoListModel = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const isDataValid = (list: unknown[]): list is Todo[] => {
    return list.every((task: unknown) => {
      return (
        task &&
        typeof task === 'object' &&
        !Array.isArray(task) &&
        'id' in task &&
        typeof task.id === 'string' &&
        'name' in task &&
        typeof task.name === 'string' &&
        'done' in task &&
        typeof task.done === 'boolean'
      );
    });
  };

  const getTasks = () => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');

    if (
      localStorageTasks &&
      Array.isArray(localStorageTasks) &&
      isDataValid(localStorageTasks)
    ) {
      setTasks(localStorageTasks);
    }
  };

  const createTask = (newTask: string) => {
    const newTasks = [
      ...tasks,
      { done: false, id: generateId(), name: newTask },
    ];

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const updateTask = (task: Todo, newState: boolean) => {
    const selectedTaskIndex = tasks.findIndex(({ id }) => task.id === id);

    if (selectedTaskIndex > -1) {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex] = { ...task, done: newState };

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    }
  };

  return {
    createTask,
    getTasks,
    updateTask,
    tasks,
  };
};

export default useTodoListModel;
