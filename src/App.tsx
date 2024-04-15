import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <>
      <Button onClick={addCounter}>Button</Button>
      <Button appearnce="big" onClick={addCounter}>
        Big Button
      </Button>
      <Input placeholder="Email" />

    </>
  );
}

export default App;
