import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="input todo item" />
      <button typ="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
