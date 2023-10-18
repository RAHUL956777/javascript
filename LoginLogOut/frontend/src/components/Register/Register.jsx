import "./Register.css";
import { useState } from "react";

const Register = () => {
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:"",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value,
    })
  };

  const subMitBtn = () => {};

  return (
    <>
      <h1>Register</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Please enter your name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Eniter your email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={user.reEnterPassword}
          onChange={handleChange}
        />
        <button type="submit" onClick={subMitBtn}>
          Register
        </button>
        <button type="submit" >
          Login
        </button>
      </div>
    </>
  );
};

export default Register;
