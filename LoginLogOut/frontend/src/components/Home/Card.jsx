import "./Card.css";
import { useEffect } from "react";
import { useState } from "react";

const Card = () => {
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://api.github.com/users/rahul956777")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="wrapper"></div>;
};

export default Card;
