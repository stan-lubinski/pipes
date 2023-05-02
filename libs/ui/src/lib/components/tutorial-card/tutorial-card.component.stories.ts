import { Meta } from '@storybook/angular';
import { TutorialCardComponent } from '../tutorial-card.component';

export default {
  title: 'TutorialCardComponent',
  component: TutorialCardComponent,
} as Meta<TutorialCardComponent>;

export const Primary = {
  render: (args: TutorialCardComponent) => ({
    props: args,
  }),
  args: {
    title: '',
    desc: '',
    img: '',
  },
};
