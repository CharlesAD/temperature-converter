import "./App.css";
import TempInput from "./components/Input/Input";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1 className="text-center">Temperature Converter</h1>
      <form className="mx-auto mt-8 flex w-1/3 justify-between">
        <TempInput label="Celsius" value={100} changeHandler={handleChange} />
        <TempInput label="Fahrenheit" value={50} changeHandler={handleChange} />
      </form>
    </>
  );
}

export default App;
