import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";
import "../global.css";
import "../styles/services.css";

function Services() {
  return (
    <div className="services">
      <div className="services__banner"></div>
      <div className="services__title-zone">
        <h1 className="text-uppercase">Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="blue-bar-services"></div>
      </div>

      <div className="services-categories">
        <div className="ux-design">
          <FontAwesomeIcon
            icon={faDesktop}
            style={{
              color: "#0D6EFD",
              fontSize: "40px",
              paddingBottom: "30px",
            }}
          />
          <h2 className="text-uppercase">UX design</h2>
          <p>
            L'<b>UX Design</b> est une méthode de conception centrée sur
            l'utilisateur. Son but est d'offrir une expérience de navigation
            optimale à l'internaute.
          </p>
        </div>

        <div className="web-development">
          <FontAwesomeIcon
            icon={faFileCode}
            style={{
              color: "#0D6EFD",
              fontSize: "40px",
              paddingBottom: "30px",
            }}
          />
          <h2 className="text-uppercase">Développement web</h2>
          <p>
            Le <b>développement de sites web</b> repose sur l'utilisation des
            langages <span>HTML,</span> <span>CSS,</span> JavaScript et{" "}
            <span>PHP.</span>
          </p>
        </div>

        <div className="seo">
          <FontAwesomeIcon
            icon={faMagnifyingGlassDollar}
            style={{
              color: "#0D6EFD",
              fontSize: "40px",
              paddingBottom: "30px",
            }}
          />
          <h2 className="text-uppercase">Référencement</h2>
          <p>
            Le <b>référencement naturel d'un site</b>, aussi appelé{" "}
            <span>SEO,</span> consiste à mettre des techniques en oeuvre pour{" "}
            <i>améliorer sa position</i> dans les résultats des moteurs de
            recherche.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
