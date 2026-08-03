import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function AIAdvisor() {
  return (
    <ExecutiveCard
      title="AI Advisor"
      subtitle="Resumen ejecutivo"
    >
      <ul className="space-y-3 text-sm text-slate-300">

        <li>• El modelo financiero está sincronizado.</li>

        <li>• Los ingresos se calculan automáticamente.</li>

        <li>• Próximamente se mostrarán recomendaciones inteligentes.</li>

      </ul>
    </ExecutiveCard>
  );
}