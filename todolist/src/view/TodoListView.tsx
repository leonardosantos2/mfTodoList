import {
  StyledListContainer,
  StyledTask,
  TodoInputContainer,
} from '../styles/TodoListViewStyles';
import useTodoListViewController, {
  sortByOptions,
} from './TodoListViewController';

const TodoListView = () => {
  const {
    handleCreateTask,
    handleSortByChange,
    handleTaskNewNameChange,
    handleTaskUpdate,
    sortBy,
    taskNewName,
    sortedTasks,
  } = useTodoListViewController();

  return (
    <>
      <TodoInputContainer>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={taskNewName}
            onChange={handleTaskNewNameChange}
            placeholder="Add new task here..."
            aria-label="New task element"
            data-testid="taskNewName"
          />

          <button
            type="submit"
            onClick={handleCreateTask}
            data-testid="addTaskBtn"
          >
            Add
          </button>
        </form>
      </TodoInputContainer>

      {!!sortedTasks.length && (
        <StyledListContainer>
          <label htmlFor="sortBy">Sort By: </label>
          <select
            id="sortBy"
            name="sortBy"
            onChange={handleSortByChange}
            value={sortBy}
            data-testid="sortBySelectField"
          >
            {sortByOptions.map(({ label, value }) => (
              <option key={`sortBy${value}`} value={value}>
                {label}
              </option>
            ))}
          </select>

          <ul>
            {sortedTasks.map((task) => (
              <StyledTask key={task.id} $done={task.done}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={handleTaskUpdate(task)}
                  data-testid={`task_checkbox_${task.name.replace(/\s/g, '_')}`}
                />
                <p onClick={() => handleTaskUpdate(task)(!task.done)}>
                  {task.name}
                </p>
              </StyledTask>
            ))}
          </ul>
        </StyledListContainer>
      )}
    </>
  );
};

export default TodoListView;
