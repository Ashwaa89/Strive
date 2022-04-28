import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [selectedAsin, setselectedAsin] = useState([]);
  const [newComment, setnewComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });
  const params = useParams();
  useEffect(() => {
    setselectedAsin(params.bookAsin);

    for (let genre of [fantasy, history, horror, romance, scifi]) {
      let foundbook = genre.find((b) => b.asin === params.bookAsin);
      if (foundbook) {
        setBook(foundbook);
        console.log(book);
        getComments();
        setnewComment({
          comment: "",
          rate: "",
          elementId: params.bookAsin,
        });
        return;
      }
    }
  }, [selectedAsin]);
  const getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${params.bookAsin}`,
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
        setComments(await response.json());

      }
    } catch (error) {
      console.error(error);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

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
        setnewComment({
          comment: "",
          rate: "",
          elementId: "",
        });
        getComments();
      } else {
        alert("error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center my-3 row-cols-2 w-100">
        <Col className="text-center">
          <h3>Book Details</h3>
          {book && (
            <SingleBook
              SelectBook={"False"}
              selectedAsin={params.bookAsin}
              book={book}
              key={book.asin}
              showInfo={false}
            ></SingleBook>
          )}
        </Col>
        <Col>
          <h3>Comments</h3>
          <Card bg={"dark"} className="mx-3">
            <Card.Body bg={"dark"} className="border mt-0 p-0">
              <Card.Title>Comments List</Card.Title>
              <div
                className="d-flex flex-column overflow-auto w-100"
                style={{ height: "100px" }}
              >
                {comments.map((c) => (
                  <div className="border py-1">
                    <Card.Text>Comment: {c.comment}</Card.Text>
                    <Card.Text>Rating: {c.rate}</Card.Text>
                  </div>
                ))}
              </div>
            </Card.Body>

            <Card.Body bg={"dark"} className="border mt-0 py-0 w-100 h-100">
              <Form onSubmit={addComment}>
                <Card.Title>Add Comment</Card.Title>
                <Card.Text>
                  <div className="form-group">
                    <label for="newCommentText">Comment</label>
                    <textarea
                      className="form-control"
                      id="newCommentText"
                      rows="3"
                      value={newComment.comment}
                      onChange={(e) => {
                        setnewComment({
                          ...newComment,
                          comment: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="newCommentRating">Rating</label>
                    <input
                      className="form-control"
                      type="number"
                      id="newCommentRating"
                      min="1"
                      max="5"
                      value={newComment.rate}
                      onChange={(e) => {
                        setnewComment({
                          ...newComment,
                          rate: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </Card.Text>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
