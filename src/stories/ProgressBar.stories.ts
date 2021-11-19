import ProgressBar from "../components/ProgressBar.vue";
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {

  },
}

const Template = (args: any) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<CalendarHeatmap v-bind="args"/>',
});

export const demo = Template.bind<any>({});
demo.args = {}

