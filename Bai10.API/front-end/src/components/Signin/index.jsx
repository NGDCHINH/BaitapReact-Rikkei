import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "rePassword") {
      setRePassword(value);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          username,
          password,
        });

        if (response.status === 200) {
          console.log("Sign-in successful");
        }
      } catch (error) {
        console.error("Sign-in failed:", error);
      }
    } else {
      console.error("Passwords do not match");
    }
  };

  return (
    <div>
      <Title>Sign In</Title>
      <Div>
        <Label>User name</Label>
        <Input
          onChange={handleChangeInput}
          type="text"
          name="username"
          value={username}
        />
      </Div>
      <Div>
        <Label>Password</Label>
        <Input
          onChange={handleChangeInput}
          type="password"
          name="password"
          value={password}
        />
      </Div>
      <Div>
        <Label>RePassword</Label>
        <Input
          onChange={handleChangeInput}
          type="password"
          name="rePassword"
          value={rePassword}
        />
      </Div>
      <Div>
        <Button onClick={handleSignIn}>Sign in</Button>
      </Div>
    </div>
  );
};

export default SignIn;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 5px;
`;
const Title = styled.h1`
  text-align: center;
  color: red;
`;
const Input = styled.input``;
const Label = styled.label`
  color: blue;
`;
const Button = styled.button`
  cursor: pointer;
`;
