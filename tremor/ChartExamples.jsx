import { AreaChart, BarChart, LineChart } from "@tremor/react";

export function TremorChartExamples() {
  const data = [
    { date: "2025-01", sales: 120, users: 35 },
    { date: "2025-02", sales: 132, users: 45 },
    { date: "2025-03", sales: 150, users: 55 },
    { date: "2025-04", sales: 180, users: 65 },
    { date: "2025-05", sales: 200, users: 75 },
    { date: "2025-06", sales: 220, users: 85 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Area Chart - Sales</h3>
        <AreaChart 
          data={data} 
          categories={["sales"]} 
          index="date"
          colors={["blue"]}
          className="h-80"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Bar Chart - Users</h3>
        <BarChart 
          data={data} 
          categories={["users"]} 
          index="date"
          colors={["green"]}
          className="h-80"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Line Chart - Sales & Users</h3>
        <LineChart 
          data={data} 
          categories={["sales", "users"]} 
          index="date"
          colors={["blue", "green"]}
          className="h-80"
        />
      </div>
    </div>
  );
}
