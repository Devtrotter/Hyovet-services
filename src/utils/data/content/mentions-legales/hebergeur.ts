import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const hebergeur: LegalSectionContent = {
  id: "hebergeur",
  title: "Hébergeur",
  blocks: [
    {
      type: "paragraph",
      content: [
        { type: "strong", text: "Vercel Inc." },
        " — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — ",
        { type: "link", label: "vercel.com", href: "https://vercel.com", external: true },
        ".",
      ],
    },
  ],
};
