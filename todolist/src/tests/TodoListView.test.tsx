import { fireEvent, render, screen } from '@testing-library/react';

import TodoListView from '../view/TodoListView';

describe('TodoListView', () => {
  test('should allow users to type new tasks and add them to the to-do list', async () => {
    render(<TodoListView />);
    const inputEl = screen.getByTestId('taskNewName') as HTMLInputElement;
    const taskName = 'Task 1';

    // Type on add task input
    fireEvent.change(inputEl, { target: { value: taskName } });
    expect(inputEl.value).toBe(taskName);

    // Click on add button
    fireEvent.click(screen.getByTestId('addTaskBtn'));

    // Check if input is empty and task was added to the list
    expect(inputEl.value).toBe('');
    const taskCheckboxes = await screen.findAllByText(/Task 1/);
    expect(taskCheckboxes).toHaveLength(1);
  });

  test('should allow users to check and uncheck tasks', () => {
    render(<TodoListView />);
    const inputEl = screen.getByTestId('taskNewName') as HTMLInputElement;
    const taskName = 'Task 2';

    // Add new task
    fireEvent.change(inputEl, { target: { value: taskName } });
    fireEvent.click(screen.getByTestId('addTaskBtn'));

    // Set new task as done
    const task2Checkbox = screen.getByTestId(
      `task_checkbox_${taskName.replace(/\s/g, '_')}`,
    ) as HTMLInputElement;
    fireEvent.click(task2Checkbox);
    expect(task2Checkbox.checked).toBe(true);

    // Uncheck new task
    fireEvent.click(task2Checkbox);
    expect(task2Checkbox.checked).toBe(false);
  });

  test('should allow users to filter tasks by status', async () => {
    render(<TodoListView />);
    const inputEl = screen.getByTestId('taskNewName') as HTMLInputElement;
    const task3Name = 'Task 3';

    // Add new tasks
    fireEvent.change(inputEl, { target: { value: task3Name } });
    fireEvent.click(screen.getByTestId('addTaskBtn'));

    // Set task 3 as done
    const task3Checkbox = screen.getByTestId(
      `task_checkbox_${task3Name.replace(/\s/g, '_')}`,
    ) as HTMLInputElement;
    fireEvent.click(task3Checkbox);

    // Filter by completed tasks
    fireEvent.change(screen.getByTestId('sortBySelectField'), {
      target: { value: 'completed' },
    });
    const completedTasks = await screen.findAllByText(/Task 3/);
    expect(completedTasks).toHaveLength(1);

    // Filter by active tasks
    fireEvent.change(screen.getByTestId('sortBySelectField'), {
      target: { value: 'active' },
    });
    expect(() =>
      screen.getByTestId(`task_checkbox_${task3Name.replace(/\s/g, '_')}`),
    ).toThrow();

    // Filter by all tasks
    fireEvent.change(screen.getByTestId('sortBySelectField'), {
      target: { value: 'all' },
    });
    const allTasks = await screen.findAllByText(/Task 3/);
    expect(allTasks).toHaveLength(1);
  });
});
