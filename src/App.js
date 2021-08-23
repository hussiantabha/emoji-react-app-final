import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let test = "Inside Outtt";
  let color = "orange";

  // const [likeCounter, setlikeCounter] = useState(0);
  // function likedMessage() {
  //   newLikeCounter = likeCounter + 1;
  //   setlikeCounter(newLikeCounter);

  //   console.log("Clicked", newLikeCounter);
  // }
  const emojiData = {
    "😂": "Laughing",
    "😢": "Sad",
    "🤯": "Crazy",
    "😋": "Yummy Food",
    "😱": "Fear",
    "🚀": "Rocket",
    "😇": "Smiling Face with Halo",
    "😲": "Astonished Face",
    "🧾": "Receipt",
    "💡": "Idea Light Bulb",
    "🥳": "Party time",
    "👲": "Person with Helmet"
  };
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let emojiInput = event.target.value;

    let meaning = emojiData[emojiInput];
    if (meaning === undefined) {
      meaning = "We don't have it in our Data";
    }
    setMeaning(meaning);
  }
  let lists = Object.keys(emojiData);
  function emojiClickHandler(item) {
    let meaning = emojiData[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Hello <span style={{ color: color }}>{test}</span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      <div>
        <h2>{meaning}</h2>
        <h2>Emoji We Know</h2>
        {lists.map(function (item, index) {
          return (
            <span
              key={item}
              style={{
                paddingLeft: "1rem",
                fontSize: "2rem",
                padding: "1.5rem 1rem"
              }}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
