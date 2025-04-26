import React from "react";

function MadlibStory({ data, onRestart }) {
  const { noun1, noun2, adjective, color } = data;

  return (
    <div>
      <p>Once upon a time, a {adjective} {color} {noun1} met a magical {noun2}. And they became best friends forever!</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;