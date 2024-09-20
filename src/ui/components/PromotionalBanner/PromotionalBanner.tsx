import { ReactElement, useEffect, useRef } from "react";

type PromotionalBannerProps = {
  text: string;
};

export default function PromotionalBanner({ text }: PromotionalBannerProps): ReactElement {
  const bannerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const bannerNode = bannerRef.current;

    if (bannerNode) {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList" || mutation.type === "characterData") {
            console.log("Текст баннера изменился:", bannerNode.textContent);
          }
        }
      });

      observer.observe(bannerNode, {
        // Отслеживать изменения текста
        characterData: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="promotional-banner">
      <p ref={ bannerRef }>{text}</p>
    </div>
  );
}
