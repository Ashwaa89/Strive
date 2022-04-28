import { Form, FormControl, Navbar, Container } from "react-bootstrap";
import { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
const MyNavBar = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand className="text-white">
          <img
            src="https://i.ibb.co/TwHYLpf/dd64da585bc57cb05e5fd4d8ce873f57-removebg-preview-1.png"
            height="40"
            width="50"
            className="mx-3"
          />
          Strive Books
        </Navbar.Brand>
      </Link>
      <Form className="d-flex mx-auto w-50">
        <FormControl
          type="search"
          placeholder="Search Here"
          className="me-2"
          aria-label="Search"
          onKeyUp={(event) => {
            props.ChangeQuery(event.target.value);
          }}
        />
      </Form>
      <Link to="/login">
        <Navbar.Brand className="text-white">
          <BsFillPersonFill className="mx-2" />
          Login
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default MyNavBar;
