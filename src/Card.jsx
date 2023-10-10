import { useState } from "react";
import './styles/Card.css'



export default function Card(props) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);

  function toggle() {
    setCommentOpen((commentOpen) => !commentOpen);
  }
  function toggleBoard() {
    setBoardOpen((boardOpen) => !boardOpen);
  }
  

  return (
    <>
    <div className="bulletin" >
        
        <h2 className="title" onClick={toggle}>{props.title}</h2>
        {/* <p>{props.topic}</p> */}
        {/* <p>{props.subtitle}</p> */}
        {commentOpen && <p>{props.comment}</p>
        }
        {commentOpen && <button className='replybtn'>Reply</button>}
        {commentOpen && <button className='replybtn'>Delete</button>}
      </div>
    </>
  );
}
