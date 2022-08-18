import "./App.css";
import TempInput from "./components/Input/Input";
import tryConvert from "./components/lib/tryConvert";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);

    if (event.target.id === "celsius") {
      console.log(tryConvert(event.target.vale, "toFahrenheit"));
    } else {
      console.log(tryConvert(event.target.value, "toCelsius"));
    }
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
