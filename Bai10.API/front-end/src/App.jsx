import "./App.css";
import PostList from "./components/CRUDpost";
import Header from "./components/Header";
import SignIn from "./components/Signin";

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <SignIn></SignIn>
      <PostList></PostList>
    </>
  );
}

export default App;
