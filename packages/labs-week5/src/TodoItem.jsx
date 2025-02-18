// src/TodoItem.jsx
import { TrashIcon } from "@heroicons/react/24/solid";

function TodoItem({ task, onDelete }) {
  return (
    <li className="flex items-center justify-between w-fit max-w-md p-2">
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          className="w-5 h-5 accent-blue-600 rounded-md cursor-pointer" 
        />
        <span className="text-lg">{task}</span>
      </label>
      <button 
        className="p-2 text-red-500 rounded hover:bg-red-100"
        onClick={onDelete}
        title="Delete task"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </li>
  );
}

export default TodoItem;