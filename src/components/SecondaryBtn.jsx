// Secondary Outlined Button
import Button from "react-bootstrap/Button";

function SecondaryBtn(props) {
  return (
    <Button
      className="SecondaryBtn"
      onClick={props.onClick}
      style={{color: "#97461B", 
      border: "2px solid #97461B",
      backgroundColor: "transparent"
    }}
    >
      {props.label}
    </Button>
  );
}

export default SecondaryBtn;
