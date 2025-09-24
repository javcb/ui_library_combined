import { TremorKPIExamples } from "./KPIExamples";

export default {
  title: "Tremor/KPI Examples",
  component: TremorKPIExamples,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const AllKPIs = () => <TremorKPIExamples />;
