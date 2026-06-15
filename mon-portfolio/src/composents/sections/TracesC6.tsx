import Image from "next/image";
import styles from "./TracesC1.module.css";

interface Preuve {
  source: string;
  texte: string;
  image?: string;
  imageTitre?: string;
  tag: string;
}

const preuves: Preuve[] = [
  {
    source: "SAé 6.05",
    texte: "",
    tag: "AC 1",
  },
  {
    source: "SAé 6.06",
    texte: "",
    tag: "AC 3",
  },
  {
    source: "Stage 2024–2025",
    texte: "",
    tag: "AC 1",
  },
];

export default function TracesC6() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>
        <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
        <div className={styles.sectionLabelLine} />
      </div>

      {preuves.map((preuve) => (
        <div key={preuve.source + preuve.tag} className={styles.preuveRow}>
          <div className={styles.preuveLeft}>
            <div>
              <p className={styles.source}>{preuve.source}</p>
              <p className={styles.texte}>
                {preuve.texte.split("\n\n").map((para, i) => (
                  <span key={i}>
                    {i > 0 && <><br /><br /></>}
                    {para}
                  </span>
                ))}
              </p>
            </div>
            <a
              href={`#ac${preuve.tag.replace("AC ", "")}`}
              className={styles.tag}
            >
              {preuve.tag}
            </a>
          </div>

          <div className={styles.preuveRight}>
            <div className={styles.imageWrapper}>
              {preuve.image ? (
                <Image
                  src={preuve.image}
                  alt={preuve.imageTitre ?? ""}
                  fill
                  sizes="50vw"
                  className={styles.image}
                />
              ) : (
                <span className={styles.imagePlaceholder}>Image à venir</span>
              )}
            </div>
            <p className={styles.imageCaption}>
              {preuve.imageTitre ?? "—"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
