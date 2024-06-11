import { act, renderHook } from '@testing-library/react';

import useTodoListViewController from '../view/TodoListViewController';

describe('useTodoListViewController', () => {
  test('starts with an empty taskNewName and a filtered list by ALL', () => {
    const { result } = renderHook(useTodoListViewController);
    expect(result.current.taskNewName).toBe('');
    expect(result.current.sortBy).toBe('all');
  });

  test('should update the taskNewName when calling the handleTaskNewNameChange function', () => {
    const { result } = renderHook(useTodoListViewController);
    const newTaskName = 'Task 1';

    act(() => {
      result.current.handleTaskNewNameChange({
        target: { value: newTaskName },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.taskNewName).toBe(newTaskName);
  });

  test('should empty out the taskNewName and include new task on the sortedTasks when calling the handleCreateTask function', () => {
    const { result } = renderHook(useTodoListViewController);

    act(() => {
      result.current.handleTaskNewNameChange({
        target: { value: 'Task 2' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleCreateTask();
    });

    expect(result.current.taskNewName).toBe('');
    expect(result.current.sortedTasks).toEqual([
      { done: false, id: expect.any(String), name: 'Task 2' },
    ]);
  });

  test('should update the sortedTasks when calling the handleTaskUpdate function', () => {
    const { result } = renderHook(useTodoListViewController);

    act(() => {
      result.current.handleTaskNewNameChange({
        target: { value: 'Task 3' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleCreateTask();
    });

    const task3Index = result.current.sortedTasks.findIndex(
      (task) => task.name === 'Task 3',
    );
    act(() => {
      result.current.handleTaskUpdate(result.current.sortedTasks[task3Index])(
        true,
      );
    });

    expect(result.current.sortedTasks[task3Index]).toEqual({
      done: true,
      id: expect.any(String),
      name: 'Task 3',
    });
  });

  test('should update the sortBy and sortedTasks to completed ones when calling the handleSortByChange function', () => {
    const { result } = renderHook(useTodoListViewController);
    const newTaskName = 'Task 4';

    act(() => {
      result.current.handleTaskNewNameChange({
        target: { value: newTaskName },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleCreateTask();
    });

    const task4Index = result.current.sortedTasks.findIndex(
      (task) => task.name === newTaskName,
    );
    act(() => {
      result.current.handleTaskUpdate(result.current.sortedTasks[task4Index])(
        true,
      );
    });

    act(() => {
      result.current.handleSortByChange({
        target: { value: 'completed' },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.sortBy).toBe('completed');
    expect(
      result.current.sortedTasks.some(
        (task) => task.name === newTaskName && task.done,
      ),
    ).toBe(true);
  });
});
