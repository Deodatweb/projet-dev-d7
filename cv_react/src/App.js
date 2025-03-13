import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import "./styles/App.css";
import "./global.css";
import Accueil from "./pages/Accueil";
import Services from "./pages/services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/blog";
import Legals from "./pages/Legals";
import Contact from "./pages/Contact";
import Github from "./pages/github";
import ScrollButton from "./pages/ScrollButton";

export default function App() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 60) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 60) {
      return setshowGoTop("goTopHidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const refScrollUp = useRef();
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div ref={refScrollUp}> </div>
      <header>
        <nav className="d-flex flex-wrap py-3" id="nav">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use></use>
            </svg>
            <span className="fs-4 text-uppercase" id="nav__title">
              John Doe
            </span>
          </a>
          <div className="menu">
            <ul className="nav nav-pills" id="nav-pills">
              <li className="nav-item text-uppercase">
                <Link to="/" className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link to="/realisations" className="nav-link">
                  Réalisations
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item text-uppercase">
                <Link to="/contact" className="nav-link">
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>

          <Dropdown as={NavItem} className="menu-burger">
            <Dropdown.Toggle as={NavLink}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "16px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="nav nav-pills" id="menu-burger__content">
              <Dropdown.Item className="nav-item text-uppercase">
                <Link to="/" className="nav-link" id="Accueil">
                  Accueil
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase">
                <Link to="/Realisations" className="nav-link">
                  Réalisations
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase">
                <Link to="/Contact" className="nav-link">
                  Me contacter
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </header>

      <ScrollButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/Realisations" element={<Realisations />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/legals" element={<Legals />}></Route>
        <Route path="/Github" element={<Github />}></Route>
      </Routes>

      <footer>
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use></use>
            </svg>
          </a>
          <div className="info">
            <div className="info__john-doe">
              <h2>John Doe</h2>
              <p>40, rue Laure Diebold
              69009 Lyon, France</p>
              <p>Téléphone : 06 07 08 09 10</p>
              <div className="social">
                <Link to="/Github">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#000", fontSize: "24px" }}
                  />
                </Link>
                <a
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#000", fontSize: "24px" }}
                  />
                </a>
                <a href="https://x.com" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    style={{ color: "#000", fontSize: "24px" }}
                  />
                </a>
              </div>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Liens utiles</h4>
              <ul className="nav flex-column">
                <li className="mb-2" id="info-categories__link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link to="/" className="nav-link p-0 text-body-secondary">
                    Accueil
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link to="/" className="nav-link p-0 text-body-secondary">
                    A propos
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Services"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Contact"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Legals"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Mes dernières réalisations</h4>
              <ul className="nav flex-column">
                <li className="mb-2" id="info-categories__link-realisations">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Realisations"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Fresh food
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link-realisations">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Realisations"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Restaurant Akira
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link-realisations">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link
                    to="/Realisations"
                    className="nav-link p-0 text-body-secondary"
                  >
                    Espace Bien-être
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Mes derniers articles</h4>
              <ul className="nav flex-column">
                <li class="mb-2" id="info-categories__link-blog">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link to="/blog" className="nav-link p-0 text-body-secondary">
                    Coder son site en HTML/CSS
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link-blog">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link to="/blog" className="nav-link p-0 text-body-secondary">
                    Vendre ses produits sur le web
                  </Link>
                </li>
                <li className="mb-2" id="info-categories__link-blog">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#0D6EFD", fontSize: "16px" }}
                  />
                  <Link to="/blog" className="nav-link p-0 text-body-secondary">
                    Se positionner sur Google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="credits">
          <p id="text-body-secondary">© Designed by John Doe 2025</p>
        </div>
      </footer>
    </div>
  );
}