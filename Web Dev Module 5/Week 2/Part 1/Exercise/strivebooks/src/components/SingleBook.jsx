import { Component } from "react";
import { Col, Card } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col
        xs={3}
        bg={"dark"}
        style={{ height: "500px" }}
        className={this.state.selected ? "border border-info rounded" : ""}
      >
        <Card bg={"dark"}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            height="300"
            onClick={() => {
              this.setState({ selected: this.state.selected === false  });
            }}
          />
          <Card.Body bg={"dark"}>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>£ {this.props.book.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
