import { Col } from "react-bootstrap";
import * as icons from "react-icons/gi";
import "./ItemDetails.scss";

const ItemDetails = ({ title, text, iconName }) => {
  return (
    <div className="itemDetails">
      <span className="itemDetails-icon">{icons[iconName]()}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default ItemDetails;
