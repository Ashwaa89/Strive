import { Badge } from "react-bootstrap";

const MyBadge = (props) => (
  <Badge className={"bg-" + props.bg + " border rounded px-5 py-2"}>
    {props.title}
  </Badge>
);

export default MyBadge;
