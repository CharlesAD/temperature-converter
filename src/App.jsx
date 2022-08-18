import "./App.css";
import TempInput from "./components/Input/Input";

function App() {
  return (
    <>
      <h1 className="text-center">Temperature Converter</h1>
      <form className="mx-auto mt-8 flex w-1/3 justify-between">
        <TempInput label="Celsius" />
        <TempInput label="Fahrenheit" />
      </form>
    </>
  );
}

export default App;
