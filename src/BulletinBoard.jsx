import { useState } from "react";

import PostForm from "./PostForm";
import Card from "./Card";

export default function Bulletins({topic}) {
  
  const [bulletins, setBulletins] = useState([
    {
      id: 0,
      topic: 'General',
      title: "This Is a Post",
      comment: "This is a comment"
    },
    
  ]);

  const addBulletin = (newBulletin) => {
    setBulletins([...bulletins, newBulletin]);
  };


  

  const filteredBulletins = bulletins.filter((bulletin) => bulletin.topic === topic);

  return (
    <>
      {filteredBulletins.map((bulletin) => (
        <Card
          key={bulletin.id}
          topic={bulletin.topic}
          title={bulletin.title}
          subtitle={bulletin.subtitle}
          comment={bulletin.comment}
          />
          ))}
          {/* <PostForm addBulletin={addBulletin}  /> */}
    </>
  );
}
