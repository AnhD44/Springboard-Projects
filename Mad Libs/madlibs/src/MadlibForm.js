import React, { useState } from "react";

function MadlibForm({ onSubmit }) {
  const [form, setForm] = useState({ noun1: "", noun2: "", adjective: "", color: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(val => val.trim() === "")) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="noun1" value={form.noun1} onChange={handleChange} placeholder="noun" />
      <input name="noun2" value={form.noun2} onChange={handleChange} placeholder="noun 2" />
      <input name="adjective" value={form.adjective} onChange={handleChange} placeholder="adjective" />
      <input name="color" value={form.color} onChange={handleChange} placeholder="color" />
      <button type="submit" disabled={Object.values(form).some(val => val.trim() === "")}>Get Story</button>
    </form>
  );
}

export default MadlibForm;