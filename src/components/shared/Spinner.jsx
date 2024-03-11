import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "black",
      }}
    />
  );
}

export default Spinner;
