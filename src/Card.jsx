import { useState } from "react";



export default function Card(props) {
  const [commentOpen, setCommentOpen] = useState(false);

  function toggle() {
    setCommentOpen((commentOpen) => !commentOpen);
  }

  return (
    <>
      <div className="bulletin" onClick={toggle}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        {!commentOpen && <p>{props.comment}</p>}
      </div>
    </>
  );
}
