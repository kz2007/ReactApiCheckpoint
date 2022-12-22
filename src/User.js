import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function User(props) {
  let [addressDisplay, setAddressDisplay] = useState("none");

  let handleClick = () => {
    if (addressDisplay === "none") setAddressDisplay("inherit");
    else setAddressDisplay("none");
  };

  return (
    <div className="User">
      <h3>
        {props.userData.name} ({props.userData.username})
      </h3>
      <h3 style={{ textDecoration: "underline"}}>{props.userData.email}</h3>
      <br />
      <h4 style={{ color: "palevioletred"}}> {props.userData.phone}</h4>
      <a href={props.userData.website}><h4>{props.userData.website}</h4></a>
      <br />
      <Button variant="dark" onClick={handleClick}>
        Show adress
      </Button>
      <div style={{ display: addressDisplay, marginTop: "16px" }}>
        <h5 style={{ color: "palevioletred"}}>
          {props.userData.address.street}, {props.userData.address.suite},{" "}
          {props.userData.address.city}, {props.userData.address.zipcode}
        </h5>
      </div>
      <br />

      <small>#{props.userData.id}</small>
    </div>
  );
}

export default User;
