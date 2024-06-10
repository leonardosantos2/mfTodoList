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
          />

          <button type="submit" onClick={handleCreateTask}>
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
            defaultValue={sortByOptions[0].value}
            onChange={handleSortByChange}
            value={sortBy}
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
