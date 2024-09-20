import "./SearchForm.css";
import { ReactElement, ChangeEvent, FormEvent, useState } from "react";

type SearchFormProps = {
  onSubmit: (val: string) => void;
};

export default function SearchForm(props: SearchFormProps): ReactElement {
  const [name, setName] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    props.onSubmit(name);
  }

  return (
    <section className='search-form__container'>
      <form className="search-form__form" onSubmit={ handleSubmit }>
        <input
          className="search-form__input"
          type="text"
          placeholder="Введите имя"
          required
          autoFocus
          onChange={ handleChange }
          minLength={ 1 }
          maxLength={ 30 }
          name="keyword"
        />
        <button className="search-form__button" type="submit" aria-label="Найти пользователя"/>
      </form>
    </section>
  );
}
