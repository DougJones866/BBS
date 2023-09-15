import Card from "./Card";
import Bulletins from "./BulletinBoard";
import './Boards.css'

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
    

  return (
    <>
       <div className="boards">
      {boards.map((board) => (
        <div className="board" key={board.topic}>
          <h2>{board.topic}</h2>
          <p>{board.description}</p>
          <Bulletins topic={board.topic} />
        </div>
      ))}
    </div>
    </>
  );
}
