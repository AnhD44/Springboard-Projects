import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

function Madlib() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  const handleRestart = () => {
    setFormData(null);
  };

  return (
    <div>
      {!formData ? (
        <MadlibForm onSubmit={handleSubmit} />
      ) : (
        <MadlibStory data={formData} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default Madlib;