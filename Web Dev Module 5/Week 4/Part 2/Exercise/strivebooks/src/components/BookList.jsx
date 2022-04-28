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

const BookList = (props) => {
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
  useEffect(() => {
    let filteredbooks = [];
    for (let genre of [scifi]) {
      filteredbooks = filteredbooks.concat(
        ...genre.filter((b) =>
          b.title.toLowerCase().includes(props.query.toLowerCase())
        )
      );
    }

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

  const SelectBook = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <Container bg={"dark"} className="my-3">
      <h3>Books</h3>
      <Row className="row-cols-4">
        {filtered.map((book) => (
          <SingleBook
            SelectBook={SelectBook}
            selectedAsin={selectedAsin}
            book={book}
            key={book.asin}
            showInfo={true}
          ></SingleBook>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
