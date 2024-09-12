
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders todo list with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a todo app')).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

test('should not add an empty todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: '' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.queryByText('')).not.toBeInTheDocument();
});

test('should handle long todo text', () => {
  render(<TodoList />);
  const longText = 'a'.repeat(100);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: longText } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText(longText)).toBeInTheDocument();
});
