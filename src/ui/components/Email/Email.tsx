import "./Email.css";

type EmailProps = {
  email: string;
}

export default function Email(props: EmailProps) {
  return (
    <li className='email'>
      <p className='email__info'>{ props.email }</p>
    </li>
  );
}
