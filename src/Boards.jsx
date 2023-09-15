import Card from "./Card";
import './Boards.css'

export default function Boards() {
  const boards = [
    {
      topic: ["General", "Gaming", "Anime"],
    },
  ];

  return (
    <>
      <div className="boards">
        <div className="board">
          <h2>General</h2>
          <p>Talk about anything!</p>
        </div>
        <div className="board">
          <h2>Gaming</h2>
          <p>Gaming discussions</p>
        </div>
        <div className="board">
          <h2>Anime</h2>
          <p>Anime new and old</p>
        </div>
        <div className="board">
          <h2>Music</h2>
          <p>Talk about some tunes?</p>
        </div>
      </div>
    </>
  );
}
