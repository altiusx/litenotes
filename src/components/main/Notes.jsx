import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default Notes;