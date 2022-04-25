import { Component } from "react";
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
import { useState, useEffect } from "react";
// class BookList extends Component {
const BookList = (props) => {
  // state = {
  //   // filtered: fantasy.concat(history, horror, romance, scifi),
  //   filtered: scifi,
  //   selectedAsin:'',
  //   comments: [],
  // };
  const [filtered, setFiltered] = useState(scifi);
  const [selectedAsin, setSelectedAsin] = useState("");
  const [comments, setComments] = useState([]);

  const [newComment, setnewComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });

  const getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${selectedAsin}`,
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
        // this.setState({
        //        comments: await response.json(),
        // });
        // console.log(this.state);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    // let newComment = {
    //   comment: e.target.querySelector("#newCommentText").value,
    //   rate: e.target.querySelector("#newCommentRating").value,
    //   elementId: selectedAsin,
    // };
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
        // e.target.querySelector("#newCommentText").value = "";
        // e.target.querySelector("#newCommentRating").value = "";
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
  useEffect(() => {
    let filteredbooks = [];
    for (let genre of [scifi]) {
      filteredbooks = filteredbooks.concat(
        ...genre.filter((b) =>
          b.title.toLowerCase().includes(props.query.toLowerCase())
        )
      );
    }
    // filteredbooks = [...new Set(filteredbooks.map((b) => b))];
    // this.setState({ filtered: filteredbooks });
    setFiltered([...new Set(filteredbooks.map((b) => b))]);
  }, [props.query]);

  useEffect(() => {
    getComments();
    setnewComment({
      comment: "",
      rate: "",
      elementId: selectedAsin,
    });
  }, [selectedAsin]);
  //   componentDidUpdate = (prevProps, prevState) => {
  //     if(this.props.query !== prevProps.query) {
  //       let filteredbooks = [];
  //       for (let genre of [scifi]) {
  //         filteredbooks = filteredbooks.concat(
  //           ...genre.filter((b) =>
  //             b.title
  //               .toLowerCase()
  //               .includes(this.props.query.toLowerCase())
  //           )
  //         );
  //       }
  //       filteredbooks = [...new Set(filteredbooks.map((b) => b))];
  //       this.setState({ filtered: filteredbooks });
  //     }
  //     if (prevState.selectedAsin !== this.state.selectedAsin ) {
  // this.getComments();
  //     }
  //         }
  const SelectBook = (asin) => {
    setSelectedAsin(asin);
    // this.setState({
    //   selectedAsin: asin,
    // })
  };
  // render() {
  return (
    <Container bg={"dark"} className="my-3">
      {/* <InputGroup className="my-3 sticky-top">
          <FormControl
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onKeyUp={(event) => {
              console.log(event.target.value)
              let filteredbooks = [];
              for (let genre of [scifi]) {
                filteredbooks = filteredbooks.concat(
                  ...genre.filter((b) =>
                    b.title
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  )
                );
              }
              filteredbooks = [...new Set(filteredbooks.map((b) => b))];

              this.setState({ filtered: filteredbooks });
            }}
          />
        </InputGroup> */}
      <Row className="row-cols-2">
        <Col>
          <h3>Books</h3>
          <Container>
            <Row bg={"dark"}>
              {/* {this.state.filtered.map((book) => (
            <SingleBook SelectBook={this.SelectBook} selectedAsin={this.state.selectedAsin} book={book} key={book.asin}></SingleBook>
          ))} */}
              {filtered.map((book) => (
                <SingleBook
                  SelectBook={SelectBook}
                  selectedAsin={selectedAsin}
                  book={book}
                  key={book.asin}
                ></SingleBook>
              ))}
            </Row>
          </Container>
        </Col>
        <Col>
          <h3>Comments</h3>
          {selectedAsin === "" ? (
            <h3>No Book Selected</h3>
          ) : (
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

              <Card.Body bg={"dark"} className="border mt-0 py-0">
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
          )}
        </Col>
      </Row>
    </Container>
  );
};
// }
// }
export default BookList;
