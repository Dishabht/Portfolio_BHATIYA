import Link from "next/link";
import styles from "./CompetencePage.module.css";

interface AC {
  num: string;
  texte: string;
}

interface Trace {
  label: string;
  tags: string[];
  fullWidth?: boolean;
}

interface CompetencePageProps {
  num: string;
  eyebrow: string;
  titre: string;
  sousTitre: string;
  acs: AC[];
  traces: Trace[];
  activeNav: "C1" | "C2" | "C6";
}

const navLinks = [
  { id: "C1", label: "C1 — Réaliser",   href: "/competences/c1-realiser" },
  { id: "C2", label: "C2 — Optimiser",  href: "/competences/c2-optimiser" },
  { id: "C6", label: "C6 — Collaborer", href: "/competences/c6-collaborer" },
];

export default function CompetencePage({
  num,
  eyebrow,
  titre,
  sousTitre,
  acs,
  traces,
  activeNav,
}: CompetencePageProps) {
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.back}>← Retour</Link>

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.filigrane} aria-hidden="true">{num}</span>

        <div className={styles.heroCenter}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{titre}</h1>
          <p className={styles.subtitle}>{sousTitre}</p>
          <span className={styles.pill}>Niveau 3</span>
        </div>

        <div className={styles.bottomLeft}>
          <span>BUT3 Informatique</span>
          <span>Parcours A – RACDV</span>
        </div>

        <div className={styles.bottomRight}>
          <span>SAé 6.05 · SAé 6.06</span>
          <span>Stage 2024–2025</span>
        </div>
      </section>

      {/* 01 — AC */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelText}>01 — APPRENTISSAGES CRITIQUES</span>
          <div className={styles.sectionLabelLine} />
        </div>

        <div className={styles.acList}>
          {acs.map((ac) => (
            <div key={ac.num} className={styles.acRow}>
              <span className={styles.acNum}>{ac.num}</span>
              <p className={styles.acText}>{ac.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — Traces */}
      <section className={styles.sectionNoPaddingTop}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
          <div className={styles.sectionLabelLine} />
        </div>

        <div className={styles.tracesGrid}>
          {traces.map((trace) => (
            <div
              key={trace.label}
              className={`${styles.traceCard} ${trace.fullWidth ? styles.traceCardFull : ""}`}
            >
              <p className={styles.traceLabel}>{trace.label}</p>
              <p className={styles.traceTitre}>À compléter</p>
              <p className={styles.traceDesc}></p>
              <div className={styles.traceTags}>
                {trace.tags.map((tag) => (
                  <span key={tag} className={styles.traceTag}>{tag}</span>
                ))}
              </div>
              <span className={styles.traceArrow}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Analyse */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelText}>03 — ANALYSE RÉFLEXIVE</span>
          <div className={styles.sectionLabelLine} />
        </div>

        <div className={styles.analyseBlock}>
          <span className={styles.analyseBadge}>À RÉDIGER</span>
          <p className={styles.analyseInnerLabel}>VOTRE TEXTE ICI</p>
          <p className={styles.analyseText}>À rédiger — votre analyse réflexive ici.</p>
        </div>
      </section>

      {/* Footer nav */}
      <nav className={styles.footerNav}>
        <span className={styles.footerCopy}>2025 © disha.bht</span>
        <div className={styles.footerLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`${styles.footerLink} ${activeNav === link.id ? styles.footerLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
