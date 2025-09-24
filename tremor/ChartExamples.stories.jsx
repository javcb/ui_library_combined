import { TremorChartExamples } from "./ChartExamples";

export default {
  title: "Tremor/Chart Examples",
  component: TremorChartExamples,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const AllCharts = () => <TremorChartExamples />;
