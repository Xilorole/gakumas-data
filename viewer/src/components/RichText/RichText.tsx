import { Fragment, type ReactNode } from "react";
import { tokenizeRich, type RichToken } from "../../lib/richtext";
import styles from "./RichText.module.css";

function render(tokens: RichToken[]): ReactNode {
  return tokens.map((token, i) => {
    switch (token.type) {
      case "text":
        return <Fragment key={i}>{token.value}</Fragment>;
      case "bouten":
        return (
          <span key={i} className={styles.bouten}>
            {render(token.children)}
          </span>
        );
      case "ruby":
        return (
          <ruby key={i} className={styles.ruby}>
            {token.base}
            <rt className={styles.rt}>{token.reading}</rt>
          </ruby>
        );
    }
  });
}

export interface RichTextProps {
  /** 傍点 《《…》》 / ルビ {漢字|よみ} 記法を含みうる本文。 */
  text: string;
}

/** 本文を傍点・ルビつきで描画する（パースは lib/richtext の純関数）。 */
export function RichText({ text }: RichTextProps) {
  return <>{render(tokenizeRich(text))}</>;
}
