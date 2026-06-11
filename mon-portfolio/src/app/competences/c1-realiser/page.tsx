import CompetencePage from "@/composents/sections/CompetencePage";

export default function C1Page() {
  return (
    <CompetencePage
      num="C1"
      eyebrow="COMPÉTENCE 01 · UE5.1 / UE6.1"
      titre="Réaliser un développement d'application"
      sousTitre="Adapter des applications sur un ensemble de supports variés"
      acs={[
        { num: "AC01", texte: "Choisir et implémenter les architectures adaptées" },
        { num: "AC02", texte: "Faire évoluer une application existante" },
        { num: "AC03", texte: "Intégrer des solutions dans un environnement de production" },
      ]}
      traces={[
        { label: "SAé 6.05", tags: ["AC01", "AC02"] },
        { label: "SAé 6.06", tags: ["AC02", "AC03"] },
        { label: "Stage 2024–2025", tags: ["AC01", "AC02", "AC03"], fullWidth: true },
      ]}
      activeNav="C1"
    />
  );
}
