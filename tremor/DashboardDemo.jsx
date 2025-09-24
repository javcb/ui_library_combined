import { TremorChartExamples } from "./ChartExamples";
import { TremorKPIExamples } from "./KPIExamples";

export default function DashboardDemo() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tremor Dashboard Demo</h1>
        <p className="text-gray-600">Examples of Tremor components for data visualization and KPIs</p>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Performance Indicators</h2>
        <TremorKPIExamples />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Charts & Analytics</h2>
        <TremorChartExamples />
      </div>
    </div>
  );
}
