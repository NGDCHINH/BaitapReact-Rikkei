import "./App.css";
import Sum from "./components/Sum";
import Label from "./components/Label";
import Nbar from "./components/Nbaritem";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <Sum number1={2} number2={10}></Sum>
      <Label
        title="Today's User"
        price="2.300"
        count="+3%"
        linkImg="https://classic.vn/wp-content/uploads/2022/07/phone-icon-800x800.png"
      ></Label>
      <Nbar
        img="data:image/png;base64,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"
        subtitle="Dashboard"
      ></Nbar>
    </>
  );
}

export default App;
