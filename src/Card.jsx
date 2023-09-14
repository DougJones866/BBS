import { useState } from "react";
import './Card.css'



export default function Card(props) {
  const [commentOpen, setCommentOpen] = useState(false);

  function toggle() {
    setCommentOpen((commentOpen) => !commentOpen);
  }

  return (
    <>
      <div className="bulletin" >
        <h2 className="title" onClick={toggle}>{props.title}</h2>
        <p>{props.subtitle}</p>
        {!commentOpen && <p>{props.comment}</p>
        }
        {!commentOpen && <button className='replybtn'>Reply</button>}
      </div>
    </>
  );
}
