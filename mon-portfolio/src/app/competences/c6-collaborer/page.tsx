import CompetencePage from "@/composents/sections/CompetencePage";

export default function C6Page() {
  return (
    <CompetencePage
      num="C6"
      eyebrow="COMPÉTENCE 06 · UE5.6 / UE6.6"
      titre="Collaborer au sein d'une équipe informatique"
      sousTitre="Manager une équipe informatique au niveau confirmé"
      acs={[
        { num: "AC01", texte: "Organiser et partager une veille numérique" },
        { num: "AC02", texte: "Identifier les enjeux de l'économie de l'innovation numérique" },
        { num: "AC03", texte: "Guider la conduite du changement informatique" },
        { num: "AC04", texte: "Accompagner le management de projet informatique" },
      ]}
      traces={[
        { label: "SAé 6.05", tags: ["AC01", "AC02"] },
        { label: "SAé 6.06", tags: ["AC03", "AC04"] },
        { label: "Stage 2024–2025", tags: ["AC01", "AC02", "AC03", "AC04"], fullWidth: true },
      ]}
      activeNav="C6"
    />
  );
}
