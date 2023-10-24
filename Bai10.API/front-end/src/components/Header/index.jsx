import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div>
      <Image src={user?.image}></Image>
      <Name>{user?.name}</Name>
      <DivE>Hello</DivE>
    </div>
  );
};

const DivE = styled.div`
  color: red;
`;
const Name = styled.div`
  color: green;
`;
const Image = styled.img`
  height: 320px;
  width: 320px;
  object-fit: cover;
  border-radius: 50%;
`;

export default Header;
