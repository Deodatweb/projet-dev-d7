import { ProgressBar } from "react-bootstrap";
import "../styles/about.css";

function johnProgressBar() {
  return (
    <div className="progress-bar">
      <h4 className="progress-bar__title">Mes compétences</h4>
      <h5>HTML5 90%</h5>
      <ProgressBar variant="danger" now={90} />
      <h5>CSS3 80%</h5>
      <ProgressBar variant="success" now={80} />
      <h5>JavaScript 70%</h5>
      <ProgressBar variant="info" now={70} />
      <h5>PHP 60%</h5>
      <ProgressBar variant="warning" now={60} />
      <h5>React 50%</h5>
      <ProgressBar variant="blue" now={50} />
    </div>
  );
}

export default johnProgressBar;
