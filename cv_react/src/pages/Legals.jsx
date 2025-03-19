import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreen, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import "../global.css";
import "../styles/legals.css";
import Accordion from "react-bootstrap/Accordion";

function Legals() {
  return (
    <div className="legals">
      <h1 className="text-uppercase">Mentions légales</h1>
      <div className="blue-bar-legals"></div>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <h2 className="legals__h2">John Doe</h2>
            <div className="accordion__contact">
              <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '20px' }} />
              <p className="adress">40, Rue Laure Diebold<br/>
              69009 Lyon, France</p>
              <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: '20px' }} />
              <a href="06 20 30 40 50" className="phone-number">
                06 07 08 09 10
              </a>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px' }} />
              <a href="john.doe@gmail.com">john.doe@gmail.com</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h2 className="legals__h2">Always Data</h2>
            <div className="host">
              <div className></div>
              <p className="adress">91 rue du Faubourg Saint Honoré<br/>
              75008 Paris</p>
              <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '20px' }} />
              <a href="https://www.alwaysdata.com/fr/">www.alwaysdata.com</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h2 className="legals__h2">Crédits</h2>
            <div className="accordion__credits">
              <p>Site développé par John Doe, étudiant au CEF. &nbsp;</p>
              <br />
              <p>
                Les images libres de droit sont issues du site{" "}
                <a href="https://pixabay.com/fr/"> Pixabay</a>.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Legals;
