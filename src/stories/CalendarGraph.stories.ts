import { PropType } from ".pnpm/@vue+runtime-core@3.2.21/node_modules/@vue/runtime-core";
import {CalendarHeatmap} from "vue3-calendar-heatmap";

export default {
  title: 'Example/CalendarHeatmap',
  component: CalendarHeatmap,
  argTypes: {
    values: {
      control: {
        type: 'object'
      },
    },
    'end-date': { control: { type: 'date' } },
    round: { control: { type: 'number' } },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CalendarHeatmap },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<CalendarHeatmap v-bind="args"/>',
});

export const Rect = Template.bind<any>({});
let contribution = [
  { date: "2021-10-11", count: 1 },
  { date: "2021-10-13", count: 6 },
  { date: "2021-10-17", count: 6 },
  { date: "2021-10-21", count: 6 },
  { date: "2021-10-25", count: 6 },
  { date: "2021-10-28", count: 6 },
  { date: "2021-11-05", count: 6 },
  { date: "2021-11-12", count: 10 },
];
Rect.args = {
  round: 0,
  'end-date': "2021-11-20",
  values: contribution,
};

export const Round = Template.bind<any>({});
Round.args = {
  round: 3,
  'end-date': "2021-11-20",
  values: contribution,
};

export const Cycle = Template.bind<any>({});
Cycle.args = {
  round: 5,
  'end-date': "2021-11-20",
  values: contribution,
};
