import { useState } from "react";

import PostForm from "./PostForm";
import Card from "./Card";

export default function Bulletins({topic}) {
  const [showPostForm, setShowPostForm] = useState(false);
  const [bulletins, setBulletins] = useState([
    {
      id: 0,
      topic: 'General',
      title: "Message board is alive!",
      comment: "Initial board post."
    },
    {
      id: 1,
      topic: 'General',
      title: "This Is a Post",
      comment: "This is a comment"
    },
    {
      id: 2,
      topic: 'Gaming',
      title: "Sonic vs Mario",
      comment: "Who's the better character?"
    },
    
    
  ]);

  const addBulletin = (newBulletin) => {
    setBulletins([...bulletins, newBulletin]);
    console.log(newBulletin)
    console.log(bulletins);
    
    
    
  };
const btnstyle ={
  backgroundColor:'transparent',
  color: 'aqua',
  border: 'none',
}

  

  const filteredBulletins = bulletins.filter((bulletin) => bulletin.topic === topic);
  

  return (
    <>
      {filteredBulletins.map((bulletin, id) => (
        <Card
          key={id}
          topic={bulletin.topic}
          title={bulletin.title}
          // subtitle={bulletin.subtitle}
          comment={bulletin.comment}
          />
          ))}
          {showPostForm && <PostForm addBulletin={addBulletin} />}
          <button style={btnstyle} className="showform" onClick={() => setShowPostForm(true)}>Add Post</button>
    </>
  );
}
