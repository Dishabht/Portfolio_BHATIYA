import CompetencePage from "@/composents/sections/CompetencePage";
import TracesC2 from "@/composents/sections/TracesC2";

export default function C2Page() {
  return (
    <CompetencePage
      num="C2"
      eyebrow="COMPÉTENCE 02 · UE5.2 / UE6.2"
      titre="Optimiser des applications"
      sousTitre="Analyser et optimiser selon des critères de performance"
      acs={[
        { num: "AC01", texte: "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire…)" },
        { num: "AC02", texte: "Profiler, analyser et justifier le comportement d'un code existant" },
        { num: "AC03", texte: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application" },
      ]}
      traces={[]}
      activeNav="C2"
      tracesNode={<TracesC2 />}
    />
  );
}
