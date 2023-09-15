import { useState } from "react";
import "./PostForm.css";

export default function PostForm({ addBulletin }) {
  const [formData, setFormData] = useState({ title: "", comment: "" });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newId = Date.now();

    const newBulletin = {
      id: newId,
      ...formData
    };
    addBulletin(newBulletin);

    setFormData({
      title: "",
      subtitle: "",
      comment: ""
    });
  };

  function openForm() {
    setFormShow((formShow) => !formShow);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Subject</h3>
        <label htmlform="title">
          <input
            type="text"
            name="title"
            id="title"
            minLength='3'
            required
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <h3>Message</h3>
        <label htmlform="message">
          <textarea
            name="comment"
            id="comment"
            minLength='3'
            required
            value={formData.comment}
            onChange={handleChange}
          />
        </label>

        <button className="submit" type="submit">Submit</button>
      </form>
      
    </>
  );
}
