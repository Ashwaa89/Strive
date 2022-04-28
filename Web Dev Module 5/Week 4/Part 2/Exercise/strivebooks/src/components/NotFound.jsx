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
  const NotFound = (props) => {
return(
<Container bg={"dark"} className="my-3 h-100">
<Col className="bg-danger py-5 border rounded">
<h2>Error 404</h2>
<h2>Page Not Found</h2>
</Col> 
</Container>  
)
}
export default NotFound;