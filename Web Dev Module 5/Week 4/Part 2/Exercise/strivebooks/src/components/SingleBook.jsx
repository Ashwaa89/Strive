import { Component } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
const SingleBook = (props) => {
  const getComments = async () => {
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

  const addComment = async (e) => {
    e.preventDefault();
    let newComment = {
      comment: e.target.querySelector("#newCommentText").value,
      rate: e.target.querySelector("#newCommentRating").value,
      elementId: props.book.asin,
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
        getComments();
      } else {
        alert("error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col
      bg={"dark"}
      style={{ height: "500px" }}
      className={
        props.selectedAsin === props.book.asin || !props.showInfo
          ? "border border-info rounded d-flex"
          : ""
      }
    >
      <Card bg={"dark"} className="w-100 border-0 py-2">
        {props.showInfo ? (
          <Link
            to={"/bookdetails/" + props.book.asin}
            style={{ right: "0", position: "absolute" }}
          >
            <BsInfoCircleFill className="mx-2 text-white" />
          </Link>
        ) : (
          ""
        )}
        <Card.Img variant="top" src={props.book.img} height="300" />

        <Card.Body bg={"dark"}>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.category}</Card.Text>
          <Card.Text>£ {props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
