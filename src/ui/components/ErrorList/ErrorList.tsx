import { ReactElement } from "react";
import "./ErrorList.css";
import LinkTo from "../LinkTo/LinkTo";

type ErrorListProps = {
  text: string;
};

export default function ErrorList(props: ErrorListProps): ReactElement {
  return (
    <>
      <h2 className='errorList__text'>{ props.text }</h2>
      <LinkTo path='/' text='Вернуться на главную страницу' />
    </>
  );
}
