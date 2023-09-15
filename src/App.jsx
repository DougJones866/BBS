import Bulletins from "./BulletinBoard";
import Boards from './Boards'

import "./styles.css";

export default function App() {
  return (
    <>
      <div className="heading">
        <h1>BBS</h1>
        <h3>Click on a board to join in!</h3>
      </div>
      <Boards />
      <Bulletins />
    </>
  );
}
