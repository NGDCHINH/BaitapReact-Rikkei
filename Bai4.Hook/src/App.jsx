import "./App.css";
import Login from "./components/login";
import CountdownTimer from "./components/countdow";
import TextLenght from "./components/countlenght";
import Money from "./components/moneyperkm";
import Degree from "./components/changedegree";

function App() {
  return (
    <>
      <Login></Login>
      <div>
        <CountdownTimer initialTime={500} />
      </div>
      <TextLenght></TextLenght>
      <Money></Money>
      <Degree></Degree>
    </>
  );
}

export default App;
