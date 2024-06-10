import { useEffect, useState } from 'react';

import useTodoListViewModel from '../viewModel/TodoListViewModel';
import { Todo } from '../types/Todo';

export const sortByOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
];

const useTodoListViewController = () => {
  const [taskNewName, setTaskNewName] = useState('');
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  const { createTask, getTasks, updateTask, tasks } = useTodoListViewModel();

  const sortedTasks = tasks.filter((task) => {
    return (
      sortBy === 'all' ||
      (sortBy === 'active' && !task.done) ||
      (sortBy === 'completed' && task.done)
    );
  });

  const handleTaskNewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskNewName(e.target.value);
  };

  const handleCreateTask = () => {
    createTask(taskNewName);
    setTaskNewName('');
  };

  const handleTaskUpdate =
    (task: Todo) => (e: React.ChangeEvent<HTMLInputElement> | boolean) => {
      updateTask(task, typeof e === 'boolean' ? e : e.target.checked);
    };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    handleCreateTask,
    handleSortByChange,
    handleTaskNewNameChange,
    handleTaskUpdate,
    sortBy,
    taskNewName,
    sortedTasks,
  };
};

export default useTodoListViewController;
