import "./Card.css";
import { useEffect } from "react";
import { useState } from "react";

const Card = () => {
  const [data,setData] = useState([]); 
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
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  return(
    <div className="cardWrapper">
        <div className="cardImage">
            <img src={data.avatar_url} alt="profile"/>
        </div>
        <div className="cardContent">
          <h2>{data.about}</h2>
        </div>
    </div>
  )
};

export default Card;
