import { Link } from "react-router-dom";
import { ReactElement } from "react";
import "./LinkTo.css";

type LinkToProps = {
  path: string;
  text: string;
};

export default function LinkTo(props: LinkToProps): ReactElement {
  return (
    <Link className='linkTo' to={ props.path }>
      <p className='linkTo__text'>{ props.text }</p>
    </Link>
  );
}
