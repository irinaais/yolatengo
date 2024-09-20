import "./PromotionalBanner.css";
import { ReactElement } from "react";

type PromotionalBannerProps = {
  text: string;
}

export default function PromotionalBanner({ text }: PromotionalBannerProps): ReactElement {
  return (
    <div className='promotional-banner'>
      <p>{ text }</p>
    </div>
  );
}
