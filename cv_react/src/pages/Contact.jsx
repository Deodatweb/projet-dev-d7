import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import "../global.css";
import "../styles/Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact__background">
      <div className="contact__layer"></div>
      <div className="contact">
        <div className="contact__title-zone">
          <h1 className="text-uppercase" id="contact__title">
            Me Contacter
          </h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="title__blue-bar"></div>
        </div>

        <div className="contact__content">
          <div className="contact__form">
            <div className="contact__form-title">
              <h2>Formulaire de contact</h2>
              <div className="contact__blue-bar"></div>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Votre nom" required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Votre adresse email"
                  required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="phoneNumber"
                  placeholder="Votre numéro de téléphone"
                  required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Sujet" required />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Votre message"
                  required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </div>

          <div className="contact__info">
            <div className="contact__info-title">
              <h2>Mes coordonnées</h2>
              <div className="contact__info-blue-bar"></div>
              <div className="contact__info-localisation">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ fontSize: "20px" }}
                />
                <p className="adress">
                  40 rue Laure Diebold 69009 Lyon, France
                </p>
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  style={{ fontSize: "20px" }}
                />
                <p className="phone-number">06 07 08 09 10</p>
              </div>
            </div>
            <br/>
            {
              <iframe
                title="unique"
                className="contact__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524681933!2d4.796398612430473!3d45.77866197096029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1731271275732!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
