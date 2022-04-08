import { footer } from "react-bootstrap";

const MyFooter = () => (
  <footer
    className="bg-dark text-center text-white align-bottom"
    style={{
      bottom: 0,
      position: "sticky",
      bottom: "0",
      height: "10%",
      width: "100%",
    }}
  >
    Strivebooks{" "}
    <cite title="Source Title">
      Footer<br></br>
    </cite>
  </footer>
);

export default MyFooter;
