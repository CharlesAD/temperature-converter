import PropTypes from "prop-types";

export default function TempInput({ label }) {
  return (
    <div>
      <label htmlFor={label.toLowerCase}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase}
        className="w-36 rounded border"
      />
    </div>
  );
}

TempInput.propTypes = {
  label: PropTypes.string.isRequired,
};
