import { Component } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
class SingleBook extends Component {
  state = {
      comments: [],
    newCommentText: "",
    newCommentRating: "",
  };
  getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzNWNjMGRhMTNhZjAwMTUyYzFjNzUiLCJpYXQiOjE2NTA0MDA5NDMsImV4cCI6MTY1MTYxMDU0M30.v0QibooBaofPJy3UJanp42OjNPJxBdYARi5I9PRPXDA",
          },
        }
      );
      if (response.ok) {
        this.setState({
          selected: this.state.selected,
          comments: await response.json(),
        });
        console.log(this.state);
      }
    } catch (error) {
      console.error(error);
    }
  };

  addComment = async (e) => {
    e.preventDefault();
    let newComment = {
      comment: e.target.querySelector("#newCommentText").value,
      rate: e.target.querySelector("#newCommentRating").value,
      elementId: this.props.book.asin,
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzNWNjMGRhMTNhZjAwMTUyYzFjNzUiLCJpYXQiOjE2NTA0MDA5NDMsImV4cCI6MTY1MTYxMDU0M30.v0QibooBaofPJy3UJanp42OjNPJxBdYARi5I9PRPXDA",
          },
        }
      );
      if (response.ok) {
        alert("Comment saved!");
        e.target.querySelector("#newCommentText").value = "";
        e.target.querySelector("#newCommentRating").value = "";
        this.getComments();
      } else {
        alert("error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Col
        xs={3}
        bg={"dark"}
        style={{ height: "500px" }}
        className={
          this.props.selectedAsin === this.props.book.asin ? "border border-info rounded d-flex" : ""
        }
      >
        <Card bg={"dark"}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            height="300"
            onClick={async () => {

              this.props.SelectBook(  this.props.selectedAsin === this.props.book.asin ? '' :   this.props.book.asin)
    
            //  this.setState({ selected: this.state.selected === false });
              await this.getComments();
            }}
          />

          <Card.Body bg={"dark"}>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>£ {this.props.book.price}</Card.Text>
          </Card.Body>
          {  this.props.selectedAsin === this.props.book.asin ? (
            <Card
              bg={"dark"}
              className="position-absolute mx-3 h-100"
              style={{ zIndex: 99, left: "100%", width: "300px" }}
            >
              <Card.Body bg={"dark"} className="border mt-0 p-0">
                <Card.Title>Comments List</Card.Title>
                <div
                  className="d-flex flex-column overflow-auto w-100"
                  style={{ height: "100px" }}
                >
                  {this.state.comments.map((c) => (
                    <div className="border py-1">
                      <Card.Text>Comment: {c.comment}</Card.Text>
                      <Card.Text>Rating: {c.rate}</Card.Text>
                    </div>
                  ))}
                </div>
              </Card.Body>

              <Card.Body bg={"dark"} className="border mt-0 py-0">
                <Form onSubmit={this.addComment}>
                  <Card.Title>Add Comment</Card.Title>
                  <Card.Text>
                    <div class="form-group">
                      <label for="newCommentText">Comment</label>
                      <textarea
                        class="form-control"
                        id="newCommentText"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label for="newCommentRating">Rating</label>
                      <input
                        class="form-control"
                        type="number"
                        id="newCommentRating"
                        min="1"
                        max="5"
                      ></input>
                    </div>
                  </Card.Text>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            ""
          )}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
