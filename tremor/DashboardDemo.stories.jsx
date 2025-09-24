import DashboardDemo from "./DashboardDemo";

export default {
  title: "Tremor/Dashboard Demo",
  component: DashboardDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const FullDashboard = () => <DashboardDemo />;
