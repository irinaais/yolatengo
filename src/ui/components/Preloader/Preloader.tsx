import "./Preloader.css";
import { ReactElement } from "react";

const Preloader = (): ReactElement => (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"/>
      </div>
    </div>
);

export default Preloader;
