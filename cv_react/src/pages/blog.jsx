import "../global.css";
import "../styles/blog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Blog() {
  return (
    <div className="blog">
      <div className="banner"></div>
      <div className="blog__title-zone">
        <h1 className="text-uppercase">Blog</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="blue-bar-blog"></div>
      </div>

      <div className="blog__cards">
        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/coder.jpg" />
          <Card.Body>
            <Card.Title as="h2">Coder son site en HTML/CSS</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 8 mars 2025</Card.Header>
        </Card>

        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/croissance.jpg" />
          <Card.Body>
            <Card.Title as="h2">Vendre ses produits sur le web</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 3 mars 2025</Card.Header>
        </Card>

        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/google.jpg" />
          <Card.Body>
            <Card.Title as="h2">Se positionner sur Google</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 22 février 2025</Card.Header>
        </Card>

        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/screens.jpg" />
          <Card.Body>
            <Card.Title as="h2">Coder en responsive design</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 19 février 2025</Card.Header>
        </Card>

        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/seo.jpg" />
          <Card.Body>
            <Card.Title as="h2">Techniques de référencement</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 12 février 2025</Card.Header>
        </Card>

        <Card style={{ width: "20rem" }} className="text-start">
          <Card.Img variant="top" src="../img/blog/technos.png" />
          <Card.Body>
            <Card.Title as="h2">Apprendre à coder</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Lire la suite</Button>
          </Card.Body>
          <Card.Header>Publié le 1 février 2025</Card.Header>
        </Card>
      </div>
    </div>
  );
}

export default Blog;
