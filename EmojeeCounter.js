import React, { useState, useEffect } from "react";
import Love from './Love.png';  // Importing the images
import Sad from './sad.png';
import Like from './like.png';

function EmojeeCounter(props) {
  console.log("pic is ", props.pic);

  // Define state variables for the image and count
  const [pic, setPic] = useState(Love);
  const [count, setCount] = useState(0);

  // useEffect hook to change the image based on the prop
  useEffect(() => {
    console.log("function called", props.pic);
    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "Sad") {
      setPic(Sad);
    }
  }, [props.pic]);  // The effect will run whenever props.pic changes

  // Increment the count when button is clicked
  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt={props.pic} />
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;
