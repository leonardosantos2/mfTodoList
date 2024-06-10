import useTodoListModel from '../model/TodoListModel';

const useTodoListViewModel = () => {
  const { createTask, getTasks, updateTask, tasks } = useTodoListModel();

  return {
    createTask,
    getTasks,
    updateTask,
    tasks,
  };
};

export default useTodoListViewModel;
