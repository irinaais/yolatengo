import "./EmailsList.css";
import { ReactElement } from "react";
import Email from "../Email/Email";

type EmailsListProps = {
  emailsList: string[];
};

export default function EmailsList(props: EmailsListProps): ReactElement {
  return (
    <section className='emails-list'>
      <h1 className="emails-list__title">Результаты поиска:</h1>
      <ul className='emails-list__list'>
        {props.emailsList.map((email, index) => <Email key={index} email={email}/>)}
      </ul>
    </section>
  );
}
