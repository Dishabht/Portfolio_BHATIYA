import CompetencePage from "@/composents/sections/CompetencePage";

export default function C2Page() {
  return (
    <CompetencePage
      num="C2"
      eyebrow="COMPÉTENCE 02 · UE5.2 / UE6.2"
      titre="Optimiser des applications"
      sousTitre="Analyser et optimiser selon des critères de performance"
      acs={[
        { num: "AC01", texte: "Anticiper les résultats de métriques (temps d'exécution, mémoire…)" },
        { num: "AC02", texte: "Profiler, analyser et justifier le comportement d'un code existant" },
        { num: "AC03", texte: "Choisir des bibliothèques et méthodes dédiées au domaine" },
      ]}
      traces={[
        { label: "SAé 6.05", tags: ["AC01", "AC02"] },
        { label: "SAé 6.06", tags: ["AC02", "AC03"] },
        { label: "Stage 2024–2025", tags: ["AC01", "AC02", "AC03"], fullWidth: true },
      ]}
      activeNav="C2"
    />
  );
}
