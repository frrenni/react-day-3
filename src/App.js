import React, { useState } from "react";
import "./App.css";

const heroes = [
  {
    id: 1,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
    name: "Doraemon",
    age: 40,
    city: "Toyama",
  },
  {
    id: 2,
    imgSrc:
      "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
    name: "Goku",
    age: 11,
    city: "West City",
  },
  {
    id: 3,
    imgSrc: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
    name: "Itachi",
    age: 8,
    city: "Konoha",
  },
];

const Cards = (props) => {
  const [click, setClick] = useState(props.name);

  console.log("render");

  const handleClick = (hero) => {
    setClick(props.name);
    console.log(click);
  };

  return (
    <div className="card">
      <img alt="" className="image" src={props.imgSrc} />
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.city}</h2>
      <button onClick={handleClick}>Show name</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      {heroes.map((hero) => (
        <Cards
          name={hero.name}
          age={hero.age}
          city={hero.city}
          imgSrc={hero.imgSrc}
          id={hero.id}
          key={hero.id}
        />
      ))}
      <h1>{}</h1>
    </div>
  );
}
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
