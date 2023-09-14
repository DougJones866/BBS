import { useState } from "react";
import { Posts }  from "./Posts";
import PostForm from "./PostForm";
import Card from "./Card";

export default function Bulletins() {
  const [bulletins, setBulletins] = useState([
    {
      id: 0,
      topic: 'General',
      title: "This Is a Post",
      comment: "This is a comment"
    }
  ]);

  const addBulletin = (newBulletin) => {
    setBulletins([...bulletins, newBulletin]);
  };

  return (
    <>
      {bulletins.map((bulletin) => (
        <Card
          key={bulletin.id}
          topic={bulletin.topic}
          title={bulletin.title}
          subtitle={bulletin.subtitle}
          comment={bulletin.comment}
        />
      ))}
      <PostForm addBulletin={addBulletin} />
    </>
  );
}
