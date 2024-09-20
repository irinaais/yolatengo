import { ReactElement, useState } from "react";
import "./SearchPage.css";
import SearchForm from "../../components/SeacrhForm/SearchForm";
import Preloader from "../../components/Preloader/Preloader";
import EmailsList from "../../components/EmailList/EmailsList";
import ErrorList from "../../components/ErrorList/ErrorList";
import LinkTo from "../../components/LinkTo/LinkTo";
import { getEmailsList } from "../../../app-components/network/YoulatengoApi";
import FontSwitch from "../../components/FontSwitch/FontSwitch";
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";

type EmailsListState = string[];

export default function SearchPage(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [emailsList, setEmailsList] = useState<EmailsListState>([]);
  const [isEmailsFetched, setIsEmailsFetched] = useState(false);
  const [bannerText, setBannerText] = useState('Скидка 20% на все товары');
  const [isError, setIsError] = useState(false);
  const [textError, setTextError] = useState('');
  const isSuccessfullyLoaded = !isLoading && !isError;
  const isErrorLoaded = !isLoading && isError;

  function handleSearchEmail(name: string) {
    setIsLoading(true);
    setIsError(false);
    setIsEmailsFetched(false);
    toggleBannerText();
    setTimeout(() => {
      try {
        const emailsList = getEmailsList(name);
        setEmailsList(emailsList);
        setIsEmailsFetched(true);
      } catch (err) {
        setIsError(true);
        setTextError(`Произошла ошибка при загрузке данных: ${ err }`);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  function toggleBannerText(){
    if (bannerText === 'Скидка 20% на все товары') {
      setBannerText('Бесплатная доставка свыше 50 долларов')
    } else {
      setBannerText('Скидка 20% на все товары');
    }
  }

  return (
    <main className='search'>
      {isLoading && <Preloader />}
      {isSuccessfullyLoaded && (
        <>
          <PromotionalBanner text={ bannerText }/>
          <FontSwitch />
          <SearchForm onSubmit={handleSearchEmail}/>
          {isEmailsFetched && <EmailsList emailsList={emailsList}/>}
          <LinkTo path='/' text='Вернуться на главную страницу'/>
        </>
      )}
      {isErrorLoaded && (
        <ErrorList text={textError}/>
      )}
    </main>
  );
}
