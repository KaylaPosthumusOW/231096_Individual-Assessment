// Primary Filled Button
import Button from "react-bootstrap/Button";
import "../styles/Buttons.css"

function PrimaryBtn(props) {
  return (
    <Button
      onClick={props.onClick}
      className={`Primary-button`}
      style={{
        backgroundColor: "#97461B",
        border: "#97461B",
        marginLeft: "45%",
        marginTop: "10px"
      }}
    >
      {props.label}
    </Button>
  );
}

export default PrimaryBtn;