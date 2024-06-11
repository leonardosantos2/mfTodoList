import { act, renderHook } from '@testing-library/react';

import useTodoListModel from '../model/TodoListModel';

describe('useTodoListModel', () => {
  describe('getTasks', () => {
    test('should return an empty list of tasks if not local storage', () => {
      const { result } = renderHook(useTodoListModel);
      expect(result.current.tasks).toEqual([]);
    });
  });

  describe('createTask', () => {
    test('should add an unchecked task to the to-do list', () => {
      const { result } = renderHook(useTodoListModel);

      act(() => {
        result.current.createTask('Task 1');
      });

      expect(result.current.tasks).toEqual([
        { done: false, id: expect.any(String), name: 'Task 1' },
      ]);
    });
  });

  describe('updateTask', () => {
    test('should update the task status to done', () => {
      const { result } = renderHook(useTodoListModel);

      act(() => {
        result.current.createTask('Task 1');
      });

      act(() => {
        result.current.updateTask(result.current.tasks[0], true);
      });

      expect(result.current.tasks).toEqual([
        { done: true, id: expect.any(String), name: 'Task 1' },
      ]);
    });
  });
});
