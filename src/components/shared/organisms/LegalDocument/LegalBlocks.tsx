import type { LegalBlock } from "@/utils/types/legal";
import { LegalInlines } from "./LegalInlines";
import { MapsConsentControl } from "./MapsConsentControl";
import styles from "./LegalBlocks.module.scss";

/** Rend les blocs d'une section : paragraphes, listes, tableau, réglage des cartes. */
export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index}>
            <LegalInlines content={block.content} />
          </p>
        );
      case "list":
        return (
          <ul key={index}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <LegalInlines content={item} />
              </li>
            ))}
          </ul>
        );
      case "table":
        // Tableau avec défilement horizontal sur mobile.
        return (
          <div key={index} className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "mapsConsent":
        return <MapsConsentControl key={index} />;
    }
  });
}
