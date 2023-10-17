import { useState } from "react";

const Register = () => {
  const [value,setValue] = useState("");
  
  return (
    <>
      <h1>Register</h1>
      <div className="form">
        <input type="text" placeholder="Please enter your name"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        <input type="email" placeholder="Eniter your email"
        value={value}
        onChange={(e)=> setValue(e.target.value)}/>
        <input type="password" placeholder="Enter your password"
        value={value}
        onChange={(e)=> setValue(e.target.value)}/>
        <input type="password" placeholder="Confirm your password"
        value={value}
        onChange={(e)=> setValue(e.target.value)}/>
        <button type="submit" onClick={subMitBtn}>Register</button>
      </div>
    </>
  )
};

export default Register;
