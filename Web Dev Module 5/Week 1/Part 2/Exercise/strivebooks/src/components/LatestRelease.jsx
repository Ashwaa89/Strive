import { render } from "@testing-library/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

class LatestRelease extends Component {
  render() {
    let genres = [fantasy, history, horror, romance, scifi];
    let genre = genres[Math.floor(Math.random() * genres.length)];

    return (
      <Container classname="container-fluid text-center">
        <Row classname="row-cols-4 text-center justify-content-center g-3 gy-5">
          <Col
            xs={12}
            classname="border border-3 text-center justify-content-center d-flex"
          >
            <div className="text-center">
              <h2>Latest Releases</h2>
            </div>
          </Col>
          {genre.map((book) => (
            <Col xs={3} style={{ height: "500px" }}>
              <Card>
                <Card.Img variant="top" src={book.img} height="300" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>£ {book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
