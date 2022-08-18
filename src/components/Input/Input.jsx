import PropTypes from "prop-types";

export default function TempInput({ label, value, changeHandler }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase()}
        className="w-36 rounded border"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

TempInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
