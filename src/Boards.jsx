import Card from "./Card";
import Bulletins from "./BulletinBoard";
import './styles/Boards.css'
import { useState } from "react";

const boards = [
    {
      topic: 'General',
      description: 'Talk about anything!',
    },
    {
      topic: 'Gaming',
      description: 'Gaming discussions',
    },
    {
      topic: 'Anime',
      description: 'Anime new and old',
    },
    {
      topic: 'Music',
      description: 'Talk about some tunes?',
    },
  ];
export default function Boards() {
  const [boardOpen, setBoardOpen] = useState(false);

  function toggleBoard() {
    setBoardOpen((boardOpen) => !boardOpen);
  }

  return (
    <>
       <div className="boards">
      {boards.map((board) => (
        <div className="board" key={board.topic} >
          <h2 onClick={toggleBoard}>{board.topic}</h2>
          <p>{board.description}</p>
          {boardOpen && <Bulletins topic={board.topic} />}
        </div>
      ))}
    </div>
    </>
  );
}
