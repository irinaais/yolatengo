import "./FontSwitch.css";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";

export default function FontSwitch(): ReactElement {
  const [font, setFont] = useState(
    window.localStorage.getItem("selectedFont") || "'Roboto', sans-serif"
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--app-font", font);
  }, [font]);

  function handleFontChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedFont = event.target.value;
    setFont(selectedFont);
    localStorage.setItem("selectedFont", selectedFont);
    document.documentElement.style.setProperty("--app-font", selectedFont);
  }

  return (
    <label>
      <select className="font-switch" onChange={ handleFontChange } value={ font } >
        <option value="'Roboto', sans-serif">
          Без засечек
        </option>
        <option value="'Merriweather', serif">
          С засечками
        </option>
      </select>
    </label>
  );
}
