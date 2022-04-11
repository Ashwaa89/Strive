import { Component } from "react";
import {
  Container,
  InputGroup,
  FormControl,
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

class BookList extends Component {
  state = {
    filtered: fantasy.concat(history, horror, romance, scifi),
  };
  render() {
    return (
      <Container bg={"dark"}>
        <InputGroup className="my-3 sticky-top">
          <FormControl
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              let filteredbooks = [];
              for (let genre of [fantasy, history, horror, romance, scifi]) {
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
        </InputGroup>
        <Row bg={"dark"}>
          {this.state.filtered.map((book) => (
            <SingleBook book={book} key={book.asin}></SingleBook>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
