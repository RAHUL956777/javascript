import "./Card.css";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetch("https://api.github.com/users/rahul956777")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        setLoading(true);
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (loading) {
      <h1>Loading...</h1>;
    }
    if(error){
      <h1>Something went wrong...</h1>
    }
  });

  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <img src={data.avatar_url} alt="profile" />
      </div>
      <div className="cardContent">
        <h2>{data.bio}</h2>
      </div>
    </div>
  );
};

export default Card;
