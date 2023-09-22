import Boards from "./Boards";

export default function Home() {
  return (
    <>
      <div className="heading">
        <h1>BBS</h1>
        <h3>Click on a board to join in!</h3>
      </div>
      <Boards  />
    </>
  );
}
