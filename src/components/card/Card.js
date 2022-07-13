import "./styles.css";
import mosmos from "../../mosmos.png";

const Card = ({ name, title, desc }) => {
  return (
    <div className="card">
      <div className="avatar">
        <img src={mosmos} alt="mosmos" />
      </div>
      <div className="card-content">
        <div className="header">
          <h2>{name}</h2>
          <h3 className="title">{title}</h3>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
