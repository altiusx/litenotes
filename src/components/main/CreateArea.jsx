import React from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);

  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function noteInput(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault(); //to avoid whole page reloading
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={noteInput}
            value={note.title}
            placeholder="Here's the title."
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          onChange={noteInput}
          value={note.content}
          placeholder={isExpanded ? "Pen your contents here!" : "Tap here to get started!"}
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;