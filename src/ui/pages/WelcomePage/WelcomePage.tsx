import { ReactElement } from "react";
import "./WelcomePage.css";
import {Link} from "react-router-dom";

export default function WelcomePage(): ReactElement {
  return (
    <main className='welcome column'>
      <Link className='link' to={'/search'}>
        <div className='welcome_title-line' data-text="yo">yo</div>
        <div className='row'>
          <div className='column'>
            <p>with special guests</p>
            <p>the schramms and kustomized</p>
          </div>
          <div className='welcome_title-line' data-text="la">la</div>
        </div>
        <div className='welcome_title-line' data-text="ten-">ten-</div>
        <div className='row flex-end'>
          <div className='column gap'>
            <p>saturday / november 27 1993</p>
            <div>
              <p>at cbgb and omfug</p>
              <p>315 bowery at bleecker st / nyc</p>
            </div>
          </div>
          <div className='welcome_title-line' data-text="go">go</div>
        </div>
      </Link>
    </main>
  );
}
