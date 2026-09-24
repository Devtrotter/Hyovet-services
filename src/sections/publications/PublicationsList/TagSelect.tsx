"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useId } from "react";
import { FiChevronDown } from "react-icons/fi";
import { publicationsList } from "@/content/publications";
import styles from "./PublicationsList.module.scss";

/** Filtre par tag : écrit dans l'URL, donc partageable et cumulable avec la recherche. */
export function TagSelect({ value, tags }: { value: string; tags: string[] }) {
  const id = useId();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    if (tag) params.set("tag", tag);
    else params.delete("tag");
    // Un nouveau filtre renvoie toujours à la première page
    params.delete("page");
    const search = params.toString();
    router.replace(search ? `/publications?${search}` : "/publications", { scroll: false });
  };

  return (
    <div className={styles.tagSelect}>
      <label htmlFor={id} className="sr-only">
        {publicationsList.tagLabel}
      </label>
      <FiChevronDown className={styles.caret} aria-hidden />
      <select id={id} value={value} onChange={(event) => handleChange(event.target.value)} className={styles.select}>
        <option value="">{publicationsList.tagPlaceholder}</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
