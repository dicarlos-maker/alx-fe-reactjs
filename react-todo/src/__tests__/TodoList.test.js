import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('can delete a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
