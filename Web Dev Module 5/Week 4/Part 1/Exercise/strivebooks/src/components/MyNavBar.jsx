import { Form,FormControl,Navbar,Container } from "react-bootstrap";
import { Component } from 'react'
import { useState, useEffect } from 'react'
// class MyNavBar extends Component  {
//render() {
const MyNavBar = (props) => {
        return (
            <Navbar bg="dark" expand="lg" >       
            <Form className="d-flex mx-auto w-50">
              <FormControl
                type="search"
                placeholder="Search Here"
                className="me-2"
                aria-label="Search"
                onKeyUp={(event) => {        
                    props.ChangeQuery(event.target.value)
                }}
              />    
            </Form>    
      </Navbar>
        )
      }
//}
//}
export default MyNavBar;
