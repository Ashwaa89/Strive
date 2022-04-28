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
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const MyLogin = (props) => {
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    let button = e.target.querySelector("button");
    button.innerText = "Logged In";
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    setTimeout(function () {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <Form onSubmit={login}>
        <Container>
          <div className="my-3">
            {" "}
            <h3>Login</h3>
          </div>

          <InputGroup className="mb-3 my-3 w-100 text-center d-flex flex-column">
            <div className="d-flex my-3">
              <InputGroup.Text className="bg-dark text-white mr-2">
                <BsFillPersonFill className="mx-2" />
              </InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div className="d-flex">
              <InputGroup.Text className="bg-dark text-white mr-2">
                <BsFillKeyFill className="mx-2" />
              </InputGroup.Text>
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                required
              />
            </div>
            <Button variant="primary" type="submit" className="my-3">
              Submit
            </Button>
          </InputGroup>
        </Container>
      </Form>
    </>
  );
};

export default MyLogin;
