import { useState } from "react";
import "../styles/PostForm.css";

const OPTIONS = [
  {
    label: "General",
    value: "General",
  },
  {
    label: "Anime",
    value: "Anime",
  },
  {
    label: "Gaming",
    value: "Gaming",
  },
  {
    label: "Music",
    value: "Music",
  },
];

export default function PostForm({ addBulletin }) {
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    topic: OPTIONS[0].value,
  });
  const [topic, setTopic] = useState(OPTIONS[0].value);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newId = Date.now();
    
    const newBulletin = {
      id: newId,
      ...formData,
    };
    
    addBulletin(newBulletin);
    
    console.log(formData.topic);
    setFormData({
      title: "",
      subtitle: "",
      comment: "",
      topic: OPTIONS[0].value,
    });

    setTopic(formData.topic);
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
            minLength="3"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label htmlform="topic">
          <select id="topic" name="topic" value={formData.topic} onChange={handleChange}>
          {OPTIONS.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
            
          </select>
        </label>
        <h3>Message</h3>
        <label htmlform="message">
          <textarea
            name="comment"
            id="comment"
            minLength="3"
            required
            value={formData.comment}
            onChange={handleChange}
          />
        </label>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
