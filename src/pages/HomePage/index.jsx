import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';
import { Joke } from '../Joke/Joke.jsx';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const jsonData = await response.json();

      setJokes(jsonData.data);
    };
    getData();
  }, []);
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
