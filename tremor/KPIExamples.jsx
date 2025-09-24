import { Metric, ProgressBar, Card } from "@tremor/react";

export function TremorKPIExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6">
        <Metric title="Revenue" value="$42,000" />
        <ProgressBar value={80} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <Metric title="Active Users" value="1,200" />
        <ProgressBar value={65} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <Metric title="Conversion Rate" value="12.5%" />
        <ProgressBar value={45} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <Metric title="Customer Satisfaction" value="4.8/5" />
        <ProgressBar value={96} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <Metric title="Monthly Growth" value="+15.2%" />
        <ProgressBar value={75} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <Metric title="Support Tickets" value="23" />
        <ProgressBar value={30} className="mt-4" />
      </Card>
    </div>
  );
}
